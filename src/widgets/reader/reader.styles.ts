import styled from 'styled-components';
import { FontFamily, FontSize, Hyphens, LineHeight, TextAlign } from '@/features/settingsButton/model';

export const ReaderContent = styled.div<{
  $columnWidth: number;
  $fontFamily: FontFamily;
  $textAlign: TextAlign;
  $hyphens: Hyphens;
  $lineHeight: LineHeight;
  $fontSize: FontSize;
  $translate: number;
}>`
  transform: translate3d(${({ $translate }) => `-${$translate}`}px, 0px, 0px);
  font-family: ${({ $fontFamily }) => $fontFamily}, serif;
  text-align: ${({ $textAlign }) => $textAlign};
  hyphens: ${({ $hyphens }) => $hyphens};
  column-width: ${({ $columnWidth }) => $columnWidth}px;
  line-height: ${({ $lineHeight }) => $lineHeight};
  font-size: ${({ $fontSize }) => $fontSize}px;
  padding-top: 20px;
  z-index: 3;
  background: transparent;
  column-fill: auto;
  orphans: 2;
  user-select: text;
  widows: 2;
  will-change: transform;
  backface-visibility: hidden;
  column-gap: 81px;
  height: 800px;
  width: 100%;
  color: ${({ theme }) => theme.colors.font};
`;

export const Paragraph = styled.p`
  text-indent: 2em;
  word-wrap: break-word;
  margin: 0;
`;
