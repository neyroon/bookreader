import styled from 'styled-components';

export const Circle = styled.span`
  content: '';
  position: absolute;
  top: 1px;
  left: 1px;
  width: 16px;
  height: 16px;
  border-radius: 16px;
  transition: 0.2s;
  background-color: ${({ theme }) => theme.colors.tertiary};
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 40px;
  height: 20px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: 100px;
  position: relative;
  transition: background-color 0.2s;
`;

export const Input = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked + ${Label} {
    border: 1px solid ${({ theme }) => theme.colors.secondary};

    ${Circle} {
      left: calc(100% - 1px);
      transform: translateX(-100%);
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;
