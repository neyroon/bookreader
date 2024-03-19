import styled from 'styled-components';

export const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const DropArea = styled.div<{ $highlite: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 100px;
  border: 5px dashed
    ${({ $highlite, theme }) =>
      $highlite ? theme.colors.secondary : theme.colors.primary};
`;

export const StyledLabel = styled.label`
  display: inline-block;
  cursor: pointer;
  padding: 20px 15px;
  color: #fff;
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
`;

export const StyledInput = styled.input`
  display: none;
`;

export const FileNameContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  margin-top: 10px;
`;

export const FileName = styled.div`
  color: ${({ theme }) => theme.colors.font};
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
    background-color: ${({ theme }) => theme.colors.danger};
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

export const ReadButton = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin-top: 30px;
  cursor: pointer;
`;
