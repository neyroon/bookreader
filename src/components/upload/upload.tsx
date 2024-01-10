import { ChangeEvent, DragEvent, useState } from 'react';
import { FILE_INPUT_ID } from './constants';
import { Box, DropArea, StyledInput, StyledLabel } from './upload.styles';

export const Upload = () => {
  const [highlite, setHighlite] = useState(false);

  const handleFile = (files: FileList) => {
    alert('Number of files: ' + files.length);
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

  const handleChange = function (e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    if (e?.target?.files) {
      handleFile(e?.target?.files);
    }
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
        <StyledInput type="file" id={FILE_INPUT_ID} />
      </DropArea>
    </Box>
  );
};
