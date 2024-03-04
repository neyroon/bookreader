import { useAppDispatch, useAppSelector } from '@/shared/model/hooks';
import {
  StyledTableOfContentsIcon,
  Title,
  TitleList,
} from './tableOfContentsButton.styles';
import { Button } from '@/shared/ui/button';
import { Modal } from '@/shared/ui/modal';
import { useState } from 'react';
import {
  selectCurrentSection,
  selectSections,
  setCurrentSection,
} from '@/entities/pageBuilder/model';

export const TableOfContentsButton = () => {
  const sections = useAppSelector(selectSections);
  const currentSection = useAppSelector(selectCurrentSection);
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => setIsModalOpen(true);

  const handleTitleClick = (index: number) =>
    dispatch(setCurrentSection(index));

  const handleClose = () => setIsModalOpen(false);

  return (
    <>
      <Button onClick={handleButtonClick}>
        <StyledTableOfContentsIcon />
      </Button>
      {isModalOpen && (
        <Modal title="Содержание" onClose={handleClose}>
          <TitleList>
            {sections.map((section, i) => (
              <Title
                onClick={() => handleTitleClick(i)}
                $active={currentSection === i}
                key={section.id}
              >
                {section.title || `Секция ${i + 1}`}
              </Title>
            ))}
          </TitleList>
        </Modal>
      )}
    </>
  );
};
