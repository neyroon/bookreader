import { Fragment, memo, useEffect } from 'react';

import { buildSections } from '../lib';

import { setSections } from '../model';

import { BookInfoType, ContentType, SectionMarkup, SectionType } from '../model/types';

import { useAppDispatch, useAppSelector } from '@/shared/model/hooks';
import { Image } from '@/shared/ui/image';
import { Typography } from '@/shared/ui/typography';
import { ParsedXML } from '@/shared/lib/parser';

export interface SectionsBuilderProps {
  parsedBookContent: ParsedXML;
}

const mapSectionMarkupToComponents = (element: SectionMarkup) => {
  if (element.type === SectionType.COVERPAGE) {
    return <Image key={element.id} src={element.src} />;
  }
  if (element.type === SectionType.BOOK_INFO) {
    const as = element.markupType === BookInfoType.ANNOTATION ? 'p' : 'h1';
    const size = element.markupType === BookInfoType.ANNOTATION ? 'normal-text' : 'heading-2';
    const align = element.markupType === BookInfoType.ANNOTATION ? undefined : 'center';

    return (
      <Fragment key={element.id}>
        <Typography as={as} $size={size} $align={align}>
          {element.value}
        </Typography>
        {element.markupType === BookInfoType.AUTHORS && <br />}
        {element.markupType === BookInfoType.BOOK_TITLE && (
          <>
            <br />
            <br />
          </>
        )}
      </Fragment>
    );
  }
  if (element.type === SectionType.CONTENT) {
    if (element.markupType === ContentType.TITLE) {
      return (
        <Fragment key={element.id}>
          <Typography as='h1' $size='heading-2' $align='center'>
            {element.value}
          </Typography>
          <br />
          <br />
        </Fragment>
      );
    }
    if (element.markupType === ContentType.PARAGRAPH) {
      return (
        <Typography as='p' $size='normal-text' key={element.id}>
          {element.value}
        </Typography>
      );
    }
  }
};

export const SectionsBuilder = memo(({ parsedBookContent }: SectionsBuilderProps) => {
  const sections = useAppSelector((state) => state.reader.sections);
  const currentSection = useAppSelector((state) => state.reader.currentSection);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const allSections = buildSections(parsedBookContent);
    dispatch(setSections(allSections));
  }, [parsedBookContent, dispatch]);

  return <>{sections.length > 0 && sections[currentSection].markup.map(mapSectionMarkupToComponents)}</>;
});
