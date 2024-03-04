import { useState, useLayoutEffect, RefObject } from 'react';

export const useFullScreen = (ref: RefObject<HTMLElement>) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const enterFullScreen = () => {
    if (ref.current) {
      ref.current.requestFullscreen();
    }
  };

  const exitFullScreen = () => {
    if (ref.current) {
      document.exitFullscreen();
    }
  };

  useLayoutEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
    };
  }, [ref]);

  return { isFullScreen, enterFullScreen, exitFullScreen };
};
