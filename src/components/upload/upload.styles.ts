import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const DropArea = styled.div<{ $highlite: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 100px;
  border: 5px dashed ${({ $highlite }) => ($highlite ? '#99149b' : '#d3cfcf')};
`;

export const StyledLabel = styled.label`
  display: inline-block;
  cursor: pointer;
  padding: 20px 15px;
  color: #fff;
  font-weight: 500;
  background-color: #99149b;
  border-radius: 8px;
`;

export const StyledInput = styled.input`
  display: none;
`;

export const FileNameContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #8b8b8b;
  padding: 10px;
  margin-top: 10px;
`;

export const FileName = styled.div`
  color: #fff;
`;

export const Cross = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
  margin-left: 10px;
  cursor: pointer;

  &::before,
  &::after {
    position: absolute;
    left: 7px;
    content: ' ';
    height: 16px;
    width: 2px;
    background-color: #b80d0d;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;
