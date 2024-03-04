import { FC, ReactNode, memo } from 'react';
import { Pagination, StyledLeftArrowIcon, StyledRightArrowIcon } from './readerPagination.styles';

export interface ReaderPaginationProps {
  onPrevious: () => void;
  onNext: () => void;
  children: ReactNode;
}

export const ReaderPagination: FC<ReaderPaginationProps> = memo(({ onPrevious, onNext, children }) => {
  const handlePrevious = () => onPrevious?.();
  const handleNext = () => onNext?.();

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
