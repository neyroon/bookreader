import { OTagNames, ParsedXML } from '@/shared/lib/parser';

import { Section } from '../model/types';
import { getBookInfo, getCoverpagesSrc, getSectionParagraphs, getSectionTitles } from './utils';
import { nanoid } from 'nanoid';

const buildCoverpageSection = (parsedBookContent: ParsedXML, sections: Section[], sectionId: string) => {
  const sources = getCoverpagesSrc(parsedBookContent);

  sections.push({
    id: sectionId,
    markup: sources,
  });
};

const buildBookInfoSection = (parsedBookContent: ParsedXML, sections: Section[], sectionId: string) => {
  const bookInfo = getBookInfo(parsedBookContent);

  sections.push({
    id: sectionId,
    markup: bookInfo,
  });
};

const getSectionInfo = (xml: ParsedXML, sectionId: string) => {
  const titles = getSectionTitles(xml);
  const paragraphs = getSectionParagraphs(xml);
  const section: Section = {
    id: sectionId,
    title: titles[0]?.value,
    markup: [...titles, ...paragraphs],
  };

  return section;
};

const buildContentSections = (parsedBookContent: ParsedXML, sections: Section[], sectionId: string) => {
  const sectionElements = parsedBookContent.getAllElements(OTagNames.SECTION);

  let i = 0;

  while (i < sectionElements.length) {
    const childSections = sectionElements[i].getAllElements(OTagNames.SECTION);

    if (childSections.length === 0) {
      const sectionInfo = getSectionInfo(sectionElements[i], sectionId);
      sections.push(sectionInfo);
      i++;
    } else {
      const parentTitles = getSectionTitles(sectionElements[i]);

      for (const [i, childSection] of childSections.entries()) {
        const section = getSectionInfo(childSection, sectionId);
        if (i === 0) {
          sections.push({
            ...section,
            markup: [...parentTitles, ...section.markup],
          });
        } else {
          sections.push(section);
        }
      }

      i += childSections.length;
    }
  }
};

export const buildSections = (parsedBookContent: ParsedXML): Section[] => {
  const sections: Section[] = [];
  const sectionId = nanoid(10);

  buildCoverpageSection(parsedBookContent, sections, sectionId);

  buildBookInfoSection(parsedBookContent, sections, sectionId);

  buildContentSections(parsedBookContent, sections, sectionId);

  return sections;
};
