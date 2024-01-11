import { ChangeEvent, DragEvent, useRef, useState } from 'react';

import { FILE_INPUT_ID } from './constants';
import { Box, Cross, DropArea, FileName, FileNameContainer, StyledInput, StyledLabel } from './upload.styles';

export const Upload = () => {
  const [highlite, setHighlite] = useState(false);
  const [fileName, setFileName] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFile = (files: FileList) => {
    setFileName(files[0].name);
  };

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setHighlite(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setHighlite(false);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setHighlite(true);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setHighlite(false);
    if (e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e?.target?.files) {
      handleFile(e?.target?.files);
    }
  };

  const handleCrossClick = () => {
    setFileName('');
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <Box>
      <DropArea
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onChange={handleChange}
        $highlite={highlite}
      >
        <StyledLabel htmlFor={FILE_INPUT_ID}>Выбрать файл</StyledLabel>
        <StyledInput type="file" id={FILE_INPUT_ID} ref={inputRef} accept='.fb2'/>
        {fileName && (
          <FileNameContainer>
            <FileName>{fileName}</FileName>
            <Cross onClick={handleCrossClick} />
          </FileNameContainer>
        )}
      </DropArea>
    </Box>
  );
};
