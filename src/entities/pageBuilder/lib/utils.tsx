import {
  BookInfoSectionMarkup,
  BookInfoType,
  ContentSectionMarkup,
  ContentType,
  CoverpageSectionMarkup,
  SectionType,
} from '../model/types';

import { ParsedXML, OTagNames } from '@/shared/lib/parser';

export const getCoverpagesSrc = (parsedBookContent: ParsedXML): CoverpageSectionMarkup[] => {
  const titleInfo = parsedBookContent.getElement(OTagNames.TITLE_INFO);
  const imagesInfo: CoverpageSectionMarkup[] = [];

  if (titleInfo) {
    const coverpage = titleInfo.getElement(OTagNames.COVERPAGE);
    const images = coverpage && coverpage.getAllElements(OTagNames.IMAGE);
    if (images) {
      for (const image of images) {
        const attr = 'l:href';
        const idAttr = image.attributes[attr];
        const binary =
          image &&
          parsedBookContent.getElement(OTagNames.BINARY, {
            attributes: { idAttr },
          });
        if (binary && binary.value) {
          imagesInfo.push({
            src: `data:image/png;base64,${binary.value}`,
            type: SectionType.COVERPAGE,
            id: image.id,
          });
        }
      }
    }
  }

  return imagesInfo;
};

export const getBookInfo = (parsed: ParsedXML): BookInfoSectionMarkup[] => {
  const titleInfo = parsed.getElement(OTagNames.TITLE_INFO);
  const markup: BookInfoSectionMarkup[] = [];

  if (titleInfo) {
    const authors = titleInfo.getAllElements(OTagNames.AUTHOR);
    if (authors.length > 0) {
      for (const author of authors) {
        const authorFirstName = author.getElement(OTagNames.AUTHOR_FIRST_NAME)?.value;
        const authorMiddleName = author.getElement(OTagNames.AUTHOR_MIDDLE_NAME)?.value;
        const authorLastName = author.getElement(OTagNames.AUTHOR_LAST_NAME)?.value;
        markup.push({
          value: `${authorFirstName} ${authorMiddleName} ${authorLastName}`,
          markupType: BookInfoType.AUTHORS,
          type: SectionType.BOOK_INFO,
          id: author.id,
        });
      }
    }

    const bookTitle = titleInfo.getElement(OTagNames.BOOK_TITLE);

    if (bookTitle) {
      markup.push({
        value: bookTitle.value,
        markupType: BookInfoType.BOOK_TITLE,
        type: SectionType.BOOK_INFO,
        id: bookTitle.id,
      });
    }

    const annotation = titleInfo.getElement(OTagNames.ANNOTATION);

    if (annotation) {
      const contents = titleInfo.getAllElements(OTagNames.PARAGRAPH);
      for (const p of contents) {
        markup.push({
          value: p.value,
          markupType: BookInfoType.ANNOTATION,
          type: SectionType.BOOK_INFO,
          id: p.id,
        });
      }
    }
  }

  return markup;
};

export const getSectionTitles = (section: ParsedXML): ContentSectionMarkup[] => {
  const title = section.getElement(OTagNames.TITLE);
  const titleParagraphs = (title && title.getAllElements(OTagNames.PARAGRAPH)) || [];
  const content: ContentSectionMarkup[] = [];

  for (const p of titleParagraphs) {
    let value = '';
    for (const child of p.children) {
      value += child.value;
    }
    content.push({
      value: p.value + value,
      id: p.id,
      markupType: ContentType.TITLE,
      type: SectionType.CONTENT,
    });
  }

  return content;
};

export const getSectionParagraphs = (section: ParsedXML): ContentSectionMarkup[] => {
  const content: ContentSectionMarkup[] = [];

  const paragraphs = section.getAllElements(OTagNames.PARAGRAPH, {
    exclude: [OTagNames.TITLE],
  });

  for (const p of paragraphs) {
    let value = '';
    for (const child of p.children) {
      value += child.value;
    }
    content.push({
      value: p.value + value,
      id: p.id,
      markupType: ContentType.PARAGRAPH,
      type: SectionType.CONTENT,
    });
  }

  return content;
};

export const getSectionId = () => {
  let id = 0;

  return () => id++;
};
