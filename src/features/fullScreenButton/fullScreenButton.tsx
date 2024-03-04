import { useFullScreen } from '@/shared/lib/use';
import { Button } from '@/shared/ui/button';
import { forwardRef, RefObject } from 'react';

import {
  StyledExitFullScreenIcon,
  StyledFullScreenIcon,
} from './fullScreenButton.styles';

export const FullScreenButton = forwardRef<HTMLElement>((_, ref) => {
  const { isFullScreen, enterFullScreen, exitFullScreen } = useFullScreen(
    ref as RefObject<HTMLElement>
  );

  const handleFullScreenClick = () => {
    if (isFullScreen) {
      exitFullScreen();
    } else {
      enterFullScreen();
    }
  };

  return (
    <Button onClick={handleFullScreenClick}>
      {isFullScreen ? <StyledExitFullScreenIcon /> : <StyledFullScreenIcon />}
    </Button>
  );
});
