import { ReactNode, memo } from 'react';
import { Pagination, StyledLeftArrowIcon, StyledRightArrowIcon } from './readerPagination.styles';
import { useKeyPress } from '@/shared/lib/use';

interface ReaderPaginationProps {
  onPrevious: () => void;
  onNext: () => void;
  children: ReactNode;
}

export const ReaderPagination = memo(({ onPrevious, onNext, children }: ReaderPaginationProps) => {
  const handlePrevious = () => onPrevious?.();
  const handleNext = () => onNext?.();

  useKeyPress('ArrowLeft', handlePrevious);
  useKeyPress('ArrowRight', handleNext);

  return (
    <>
      <Pagination onClick={handlePrevious}>
        <StyledLeftArrowIcon />
      </Pagination>
      {children}
      <Pagination onClick={handleNext}>
        <StyledRightArrowIcon />
      </Pagination>
    </>
  );
});
