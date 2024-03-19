import { decSection, incSection } from '@/entities/pageBuilder/model';
import { SectionsBuilder } from '@/entities/pageBuilder/ui';
import { ReaderPagination } from '@/features/readerPagination';
import { useMutationObserver, useResizeObserver } from '@/shared/lib/use';
import { useAppDispatch, useAppSelector } from '@/shared/model/hooks';
import { useCallback, useLayoutEffect, useState } from 'react';

import { ReaderContent } from './reader.styles';
import { ParsedXML } from '@/shared/lib/parser';
import { useStableCallback } from '@/shared/lib/use/useStableCallback';

export interface ReaderProps {
  parsedBookContent: ParsedXML;
}

export interface ReaderSize {
  width: number;
  height: number;
}

const COLUMN_GAP = 81;

export const Reader = ({ parsedBookContent }: ReaderProps) => {
  const fontStore = useAppSelector((state) => state.font);
  const currentSection = useAppSelector((state) => state.reader.currentSection);
  const totalSections = useAppSelector((state) => state.reader.totalSections);
  const dispatch = useAppDispatch();

  const [readerSize, setReaderSize] = useState<ReaderSize>({
    width: 0,
    height: 0,
  });
  const [translate, setTranslate] = useState(0);
  const [isSectionDec, setIsSectionDec] = useState(false);

  const handleReaderResize = useCallback((entry: ResizeObserverEntry) => {
    const width = entry.borderBoxSize[0].inlineSize;
    const height = entry.borderBoxSize[0].blockSize;

    setReaderSize({ width, height });
  }, []);

  const handleMutation = useStableCallback((mutationList: MutationRecord[]) => {
    if (isSectionDec) {
      const lastChild = mutationList[mutationList.length - 1].target.lastChild;
      if (lastChild && lastChild.nodeType === 1) {
        const lastChildElement = lastChild as Element;

        const { right } = lastChildElement.getBoundingClientRect();

        const v = Math.trunc(right / readerSize.width);
        setTranslate(v * (readerSize.width - COLUMN_GAP));
      }
    }
  });

  const readerRef = useResizeObserver<HTMLDivElement>(handleReaderResize);
  useMutationObserver(readerRef, handleMutation);

  useLayoutEffect(() => {
    if (readerRef.current) {
      const { width, height } = readerRef.current.getBoundingClientRect();
      setReaderSize({ width, height });
    }
  }, [readerRef]);

  const handleDecPage = () => {
    console.log(readerSize);
    if (readerRef.current && readerSize.width > readerRef.current.getBoundingClientRect().right) {
      setTranslate((prevT) => prevT - readerSize.width - COLUMN_GAP);
    } else {
      if (currentSection > 0) {
        setIsSectionDec(true);

        dispatch(decSection());
      }
    }
  };

  const handleIncPage = () => {
    if (
      readerRef.current?.lastElementChild &&
      readerSize.width < readerRef.current.lastElementChild.getBoundingClientRect().left
    ) {
      setTranslate((prevT) => prevT + readerSize.width + COLUMN_GAP);
    } else {
      if (currentSection < totalSections) {
        setTranslate(0);
        setIsSectionDec(false);
        dispatch(incSection());
      }
    }
  };

  const columnWidth = readerSize.width / 2 - COLUMN_GAP;

  return (
    <ReaderPagination onPrevious={handleDecPage} onNext={handleIncPage}>
      <ReaderContent ref={readerRef} $columnWidth={columnWidth} $fontStore={fontStore} $translate={translate}>
        <SectionsBuilder parsedBookContent={parsedBookContent} />
      </ReaderContent>
    </ReaderPagination>
  );
};
