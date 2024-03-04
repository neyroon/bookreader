import { FC, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { PORTAL_ERROR_MSG } from './constants';

export interface PortalProps {
  id: string;
  children: ReactNode;
}

export const Portal: FC<PortalProps> = ({ id, children }) => {
  const [container, setContainer] = useState<HTMLElement>();

  useEffect(() => {
    if (id) {
      const portalContainer = document.getElementById(id);

      if (!portalContainer) {
        throw new Error(PORTAL_ERROR_MSG);
      }

      setContainer(portalContainer);
    }
  }, [id]);

  return container ? createPortal(children, container) : null;
};
