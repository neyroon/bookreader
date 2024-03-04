import { Attrubutes, Options, ParsedXML, TagNames } from './types';

// TODO: testing

class Tag implements ParsedXML {
  id: number;
  name: TagNames;
  attributes: Attrubutes = {};
  value = '';
  children: ParsedXML[] = [];

  constructor(name: TagNames, id: number) {
    this.name = name;
    this.id = id;
  }

  getAllElements(tagName: TagNames, options?: Options, isFirstRender = true): ParsedXML[] {
    const matches: ParsedXML[] = [];

    if (this.name.toLowerCase() === tagName.toLowerCase() && !isFirstRender) {
      if (options && options.attributes) {
        const { attributes } = options;
        const attributesKeys = Object.keys(attributes);

        const filteredKeys = attributesKeys.filter((key) => attributes[key] === this.attributes[key]);

        if (filteredKeys.length === attributesKeys.length) matches.push(this);
      } else matches.push(this);
    }

    this.children.forEach((child) => {
      if (!options?.exclude?.includes(child.name)) matches.push(...child.getAllElements(tagName, options, false));
    });

    return matches;
  }

  getElement(tagName: string, options?: Options): ParsedXML | null {
    if (this.name === tagName) {
      if (options && options.attributes) {
        const { attributes } = options;
        const attributesKeys = Object.keys(attributes);

        const filteredKeys = attributesKeys.filter((key) => attributes[key] === this.attributes[key]);

        if (filteredKeys.length === attributesKeys.length) return this;
      } else return this;
    }
    let match: ParsedXML | null = null;

    for (const child of this.children) {
      const el = child.getElement(tagName);
      if (el) {
        match = el;
        break;
      }
    }

    return match;
  }
}

export class Parser {
  tagId = 0;

  #parseFromString(xmlText: string) {
    xmlText = this.#encodeCDATAValues(xmlText);
    const cleanXmlText = xmlText
      .replace(/\s{2,}/g, ' ')
      .replace(/\\t\\n\\r/g, '')
      .replace(/>/g, '>\n')
      .replace(/</g, '\n<')
      .replace(/<\//g, '\n</')
      .replace(/\]\]/g, ']]\n');

    const rawXmlData: ParsedXML[] = [];

    cleanXmlText.split('\n').map((element) => {
      element = element.trim();

      if (!element || element.indexOf('?xml') > -1) {
        return;
      }

      if (element.startsWith('<') && element.indexOf('CDATA') < 0) {
        const parsedTag = this.#parseTag(element);
        rawXmlData.push(parsedTag);

        if (element.match(/\/\s*>$/)) {
          rawXmlData.push(this.#parseTag('</' + parsedTag.name + '>'));
        }
      } else {
        const lastElement = rawXmlData[rawXmlData.length - 1];
        if (lastElement.value) lastElement.value += ` ${this.#parseValue(element)}`;
        else lastElement.value = this.#parseValue(element);
      }
    });

    return this.#convertTagsArrayToTree(rawXmlData);
  }

  #encodeCDATAValues(xmlText: string) {
    const cdataRegex = new RegExp(/<!\[CDATA\[([^\]\]]+)\]\]/gi);
    let result = cdataRegex.exec(xmlText);
    while (result) {
      if (result.length > 1) {
        xmlText = xmlText.replace(result[1], encodeURIComponent(result[1]));
      }

      result = cdataRegex.exec(xmlText);
    }

    return xmlText;
  }

  #parseTag(tagText: string) {
    const cleanTagText = tagText.match(/([^\s]*)=('([^']*?)'|"([^"]*?)")|([\\/?\w\-\\:]+)/g);
    const tagName = cleanTagText?.shift()?.replace(/\/\s*$/, '') as TagNames;
    const id = this.tagId++;
    const tag = new Tag(tagName, id);

    cleanTagText?.map((attribute) => {
      let attributeKeyVal = attribute.split('=');

      if (attributeKeyVal.length < 2) {
        return;
      }

      const attributeKey = attributeKeyVal[0];
      let attributeVal = '';

      if (attributeKeyVal.length === 2) {
        attributeVal = attributeKeyVal[1];
      } else {
        attributeKeyVal = attributeKeyVal.slice(1);
        attributeVal = attributeKeyVal.join('=');
      }

      tag.attributes[attributeKey] =
        'string' === typeof attributeVal
          ? attributeVal.replace(/^"/g, '').replace(/^'/g, '').replace(/"$/g, '').replace(/'$/g, '').trim()
          : attributeVal;
    });

    return tag;
  }

  #parseValue(tagValue: string) {
    if (tagValue.indexOf('CDATA') < 0) {
      return tagValue.trim();
    }

    return tagValue.substring(tagValue.lastIndexOf('[') + 1, tagValue.indexOf(']'));
  }

  #convertTagsArrayToTree(xml: ParsedXML[]) {
    const xmlTree: ParsedXML[] = [];

    while (xml.length > 0) {
      const tag = xml.shift() as ParsedXML;
      if (tag.name.startsWith('/')) {
        break;
      }
      xmlTree.push(tag!);
      tag.children = this.#convertTagsArrayToTree(xml);
    }

    return xmlTree;
  }

  parseFromString(xmlText: string) {
    return this.#parseFromString(xmlText);
  }
}
