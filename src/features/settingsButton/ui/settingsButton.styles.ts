import {
  AlignJustifyIcon,
  AlignLeftIcon,
  FontIcon,
  FontSizeIcon,
  IntermediateLineHeightIcon,
  MaxLineHeightIcon,
  MinLineHeightIcon,
} from '@/shared/lib/icons';
import { Typography } from '@/shared/ui/typography';
import styled, { css } from 'styled-components';

export const ButtonContent = styled.div`
  cursor: auto;
  background-color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  top: calc(100% + 15px);
  right: -5px;
  width: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  z-index: 10;
  color: ${({ theme }) => theme.colors.font};
  &:before {
    content: '';
    position: absolute;
    top: -10px;
    right: 15px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const StyledFontIcon = styled(FontIcon)`
  & path {
    fill: ${({ theme }) => theme.colors.font};
  }
`;

export const AttributeBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.tertiary};
`;

export const AlignIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const FontContainer = styled(Typography)<{ $active?: boolean }>`
  padding: 15px 0;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.tertiary};
  }
  ${({ $active, theme }) =>
    $active
      ? css`
          color: ${theme.colors.secondary}};
        `
      : ''}
`;

export const FontSizeBox = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.tertiary};
  display: flex;
`;

export const FontSizeElement = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  cursor: pointer;

  &:first-child {
    border-top-left-radius: 10px;
  }

  &:last-child {
    border-top-right-radius: 10px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
  }

  &:not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.colors.tertiary};
  }
`;

export const NormalFontSizeIcon = styled(FontSizeIcon)<{ $active: boolean }>`
  fill: ${({ $active, theme }) =>
    $active ? theme.colors.secondary : theme.colors.font};
`;

export const LargeFontSizeIcon = styled(FontSizeIcon)<{ $active: boolean }>`
  fill: ${({ $active, theme }) =>
    $active ? theme.colors.secondary : theme.colors.font};
  width: 32px;
  height: 32px;
`;

export const AlignIcon = styled.div`
  cursor: pointer;
`;

export const StyledAlignLeftIcon = styled(AlignLeftIcon)<{ $active: boolean }>`
  & path {
    stroke: ${({ $active, theme }) =>
      $active ? theme.colors.secondary : theme.colors.tertiary};
  }
`;

export const StyledAlignJustifyIcon = styled(AlignJustifyIcon)<{
  $active: boolean;
}>`
  & path {
    stroke: ${({ $active, theme }) =>
      $active ? theme.colors.secondary : theme.colors.tertiary};
  }
`;

export const LineHeightIcon = styled.div`
  cursor: pointer;
`;

export const StyledMinLineHeightIcon = styled(MinLineHeightIcon)<{
  $active: boolean;
}>`
  & line {
    stroke: ${({ $active, theme }) =>
      $active ? theme.colors.secondary : theme.colors.font};
  }
`;

export const StyledIntermediateLineHeightIcon = styled(
  IntermediateLineHeightIcon
)<{
  $active: boolean;
}>`
  & line {
    stroke: ${({ $active, theme }) =>
      $active ? theme.colors.secondary : theme.colors.font};
  }
`;

export const StyledMaxLineHeightIcon = styled(MaxLineHeightIcon)<{
  $active: boolean;
}>`
  & line {
    stroke: ${({ $active, theme }) =>
      $active ? theme.colors.secondary : theme.colors.font};
  }
`;

export const ThemeBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
`;

export const LineHeightBox = styled(ThemeBox)``;

export const Theme = styled.div<{ $active: boolean }>`
  padding: 10px;
  border-radius: 20px;
  width: 45%;
  cursor: pointer;
  border: 1px solid
    ${({ $active, theme }) =>
      $active ? theme.colors.secondary : theme.colors.tertiary};
`;

export const ThemeLight = styled(Theme)`
  background-color: #fff;
  color: #000;
`;

export const ThemeDark = styled(Theme)`
  background-color: #171717;
  color: #c4c4c4;
`;
