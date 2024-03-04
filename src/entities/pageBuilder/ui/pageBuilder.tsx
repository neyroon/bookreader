import { FC, Fragment, memo, useEffect } from 'react';

import { buildSections } from '../lib';

import { selectCurrentSection, selectSections, setSections } from '../model';

import { BookInfoType, ContentType, SectionType } from '../model/types';

import { useAppDispatch, useAppSelector } from '@/shared/model/hooks';
import { Image } from '@/shared/ui/image';
import { Typography } from '@/shared/ui/typography';
import { ParsedXML } from '@/shared/lib/parser';

export interface PageBuilderProps {
  parsedBookContent: ParsedXML;
}

export const PageBuilder: FC<PageBuilderProps> = memo(({ parsedBookContent }) => {
  const sections = useAppSelector(selectSections);
  const currentSection = useAppSelector(selectCurrentSection);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const allSections = buildSections(parsedBookContent);
    dispatch(setSections(allSections));
  }, []);

  return (
    <>
      {sections.length > 0 &&
        sections[currentSection].markup.map((element) => {
          switch (element.type) {
            case SectionType.COVERPAGE:
              return <Image key={element.id} src={element.src} />;
            case SectionType.BOOK_INFO: {
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
            case SectionType.CONTENT: {
              switch (element.markupType) {
                case ContentType.TITLE:
                  return (
                    <Fragment key={element.id}>
                      <Typography as='h1' $size='heading-2' $align='center'>
                        {element.value}
                      </Typography>
                      <br />
                      <br />
                    </Fragment>
                  );
                case ContentType.PARAGRAPH:
                  return (
                    <Typography as='p' $size='normal-text' key={element.id}>
                      {element.value}
                    </Typography>
                  );
              }
            }
          }
        })}
    </>
  );
});
