export enum SectionType {
  COVERPAGE = 'COVERPAGE',
  BOOK_INFO = 'BOOK_INFO',
  CONTENT = 'CONTENT',
}

export type CoverpageSectionMarkup = {
  type: SectionType.COVERPAGE
  id: number
  src: string
}

export enum BookInfoType {
  AUTHORS = 'AUTHORS',
  BOOK_TITLE = 'BOOK_TITLE',
  ANNOTATION = 'ANNOTATION',
}

export type BookInfoSectionMarkup = {
  type: SectionType.BOOK_INFO
  markupType: BookInfoType
  id: number
  value: string
}

export enum ContentType {
  TITLE = 'TITLE',
  PARAGRAPH = 'PARAGRAPH',
}

export type ContentSectionMarkup = {
  type: SectionType.CONTENT
  markupType: ContentType
  id: number
  value: string
}

export interface Section {
  id: number
  title?: string
  markup: Array<CoverpageSectionMarkup | BookInfoSectionMarkup | ContentSectionMarkup>
}

export interface ReaderState {
  currentSection: number
  totalSections: number
  bookTitle: string
  sections: Section[]
}
