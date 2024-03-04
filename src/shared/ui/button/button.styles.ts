import styled from 'styled-components';

export const Box = styled.button`
  width: 40px;
  height: 40px;
  font-size: 18px;
  background-color: ${({ theme }) => theme.colors.bg};
  border: none;
  padding: 0;
  cursor: pointer;
  position: relative;
`;
