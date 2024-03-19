import styled from 'styled-components';
import { FontState } from '@/features/settingsButton/model/types';

export const ReaderContent = styled.div<{
  $columnWidth: number;
  $fontStore: FontState;
  $translate: number;
}>`
  transform: translate3d(${({ $translate }) => `-${$translate}`}px, 0px, 0px);
  font-family: ${({ $fontStore }) => $fontStore.fontFamily}, serif;
  text-align: ${({ $fontStore }) => $fontStore.textAlign};
  hyphens: ${({ $fontStore }) => $fontStore.hyphens};
  line-height: ${({ $fontStore }) => $fontStore.lineHeight};
  font-size: ${({ $fontStore }) => $fontStore.fontSize}px;
  column-width: ${({ $columnWidth }) => $columnWidth}px;
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
