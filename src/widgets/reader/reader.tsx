import { decSection, incSection, selectCurrentSection, selectTotalSections } from '@/entities/pageBuilder/model';
import { PageBuilder } from '@/entities/pageBuilder/ui';
import { ReaderPagination } from '@/features/readerPagination';
import { useKeyPress, useMutationObserver, useResizeObserver } from '@/shared/lib/use';
import { useAppDispatch, useAppSelector } from '@/shared/model/hooks';
import { FC, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

import { ReaderContent } from './reader.styles';
import { ParsedXML } from '@/shared/lib/parser';

export interface ReaderProps {
  parsedBookContent: ParsedXML;
}

export interface ReaderSize {
  width: number;
  height: number;
}

export const Reader: FC<ReaderProps> = ({ parsedBookContent }) => {
  const fontStore = useAppSelector((state) => state.font);
  const currentSection = useAppSelector(selectCurrentSection);
  const totalSections = useAppSelector(selectTotalSections);
  const dispatch = useAppDispatch();

  const [readerSize, setReaderSize] = useState<ReaderSize>({
    width: 0,
    height: 0,
  });
  const [translate, setTranslate] = useState(0);
  const [isSectionDec, setIsSectionDec] = useState(false);
  const handleReaderResize = useCallback((target: HTMLDivElement, entry: ResizeObserverEntry) => {
    const width = entry.borderBoxSize[0].inlineSize;
    const height = entry.borderBoxSize[0].blockSize;

    setReaderSize({ width, height });
  }, []);
  const readerRef = useResizeObserver(handleReaderResize);

  const handleMutation = (mutationList: MutationRecord[]) => {
    if (isSectionDec) {
      const lastChild = mutationList[mutationList.length - 1].target.lastChild;
      if (lastChild && lastChild.nodeType === 1) {
        const lastChildElement = lastChild as Element;

        const { right } = lastChildElement.getBoundingClientRect();

        const v = Math.trunc(right / readerSize.width);
        setTranslate(v * (readerSize.width - 81));
      }
    }
  };

  const handleMutationCB = useRef(handleMutation);

  useEffect(() => {
    handleMutationCB.current = handleMutation;
  });

  useMutationObserver(readerRef, (mutationList: MutationRecord[]) => handleMutationCB.current(mutationList));

  useLayoutEffect(() => {
    if (readerRef.current) {
      const { width, height } = readerRef.current.getBoundingClientRect();
      setReaderSize({ width, height });
    }
  }, []);

  const handleDecPage = () => {
    if (readerRef.current && readerSize.width > readerRef.current.getBoundingClientRect().right) {
      setTranslate((prevT) => prevT - readerSize.width - 81);
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
      setTranslate((prevT) => prevT + readerSize.width + 81);
    } else {
      if (currentSection < totalSections) {
        setTranslate(0);
        setIsSectionDec(false);
        dispatch(incSection());
      }
    }
  };

  useKeyPress('ArrowLeft', handleDecPage);
  useKeyPress('ArrowRight', handleIncPage);

  const getColumnWidth = () => readerSize.width / 2 - 81;

  return (
    <ReaderPagination onPrevious={handleDecPage} onNext={handleIncPage}>
      <ReaderContent
        ref={readerRef}
        $columnWidth={getColumnWidth()}
        $fontFamily={fontStore.fontFamily}
        $textAlign={fontStore.textAlign}
        $hyphens={fontStore.hyphens}
        $lineHeight={fontStore.lineHeight}
        $fontSize={fontStore.fontSize}
        $translate={translate}
      >
        <PageBuilder parsedBookContent={parsedBookContent} />
      </ReaderContent>
    </ReaderPagination>
  );
};
