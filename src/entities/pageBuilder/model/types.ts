export const SectionType = {
  COVERPAGE: 'COVERPAGE',
  BOOK_INFO: 'BOOK_INFO',
  CONTENT: 'CONTENT',
} as const;

type ValueOf<T> = T[keyof T];

export type SectionType = ValueOf<typeof SectionType>;

export type CoverpageSectionMarkup = {
  type: typeof SectionType.COVERPAGE;
  id: number;
  src: string;
};

export const BookInfoType = {
  AUTHORS: 'AUTHORS',
  BOOK_TITLE: 'BOOK_TITLE',
  ANNOTATION: 'ANNOTATION',
} as const;

export type BookInfoType = ValueOf<typeof BookInfoType>;

export type BookInfoSectionMarkup = {
  type: typeof SectionType.BOOK_INFO;
  markupType: BookInfoType;
  id: number;
  value: string;
};

export const ContentType = {
  TITLE: 'TITLE',
  PARAGRAPH: 'PARAGRAPH',
} as const;

export type ContentType = ValueOf<typeof ContentType>;

export type ContentSectionMarkup = {
  type: typeof SectionType.CONTENT;
  markupType: ContentType;
  id: number;
  value: string;
};

export type SectionMarkup = CoverpageSectionMarkup | BookInfoSectionMarkup | ContentSectionMarkup;

export interface Section {
  id: string;
  title?: string;
  markup: SectionMarkup[];
}

export interface ReaderState {
  currentSection: number;
  totalSections: number;
  bookTitle: string;
  sections: Section[];
}
