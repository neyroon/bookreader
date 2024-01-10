import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const DropArea = styled.div<{ $highlite: boolean }>`
  padding: 100px;
  border: 5px dashed ${({ $highlite }) => ($highlite ? '#99149b' : '#d3cfcf')};
`;

export const StyledLabel = styled.label`
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
