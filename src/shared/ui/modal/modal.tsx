import { useKeyPress, useOutsideClick } from '@/shared/lib/use';
import { createPortalContainer } from '@/shared/lib/utils';
import { FC, ReactNode, useEffect, useRef, useState } from 'react';

import { Portal } from '../portal';
import { Typography } from '../typography';
import { MODAL_CONTAINER_ID } from './constants';
import { Body, CloseButton, CloseButtonIcon, Content, Header, Wrap } from './modal.styles';

export interface ModalProps {
  onClose?: () => void;
  title?: string;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({ title, onClose, children }) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    createPortalContainer({ id: MODAL_CONTAINER_ID });
    setMounted(true);
  }, []);

  const handleClose = () => {
    onClose?.();
  };

  useOutsideClick(rootRef, handleClose);
  useKeyPress('Escape', handleClose);

  return isMounted ? (
    <Portal id={MODAL_CONTAINER_ID}>
      <Wrap>
        <Content ref={rootRef}>
          <Header>
            <Typography $size='heading-2'>{title}</Typography>
            <CloseButton onClick={handleClose}>
              <CloseButtonIcon />
            </CloseButton>
          </Header>
          <Body>{children}</Body>
        </Content>
      </Wrap>
    </Portal>
  ) : null;
};
