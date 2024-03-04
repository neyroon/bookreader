export interface Attrubutes {
  [key: string]: string;
}

export interface Options {
  attributes?: Attrubutes;
  exclude?: TagNames[];
}

export interface ParsedXML {
  id: number;
  name: TagNames;
  attributes: Attrubutes;
  value: string;
  children: ParsedXML[];
  getAllElements: (
    tagName: TagNames,
    options?: Options,
    isFirstRender?: boolean
  ) => ParsedXML[];
  getElement: (tagName: string, options?: Options) => ParsedXML | null;
}

export const OTagNames = {
  ALL: '*',
  TITLE_INFO: 'title-info',
  COVERPAGE: 'coverpage',
  BINARY: 'binary',
  IMAGE: 'image',
  AUTHOR: 'author',
  AUTHOR_FIRST_NAME: 'first-name',
  AUTHOR_MIDDLE_NAME: 'middle-name',
  AUTHOR_LAST_NAME: 'last-name',
  BOOK_TITLE: 'book-title',
  ANNOTATION: 'annotation',
  PARAGRAPH: 'p',
  BODY: 'body',
  SECTION: 'section',
  TITLE: 'title',
} as const;

export type TagNames = (typeof OTagNames)[keyof typeof OTagNames];
