import { useEffect } from 'react';

export const useKeyPress = (targetKey: string, callback: () => void) => {
  const downHandler = ({ key }: KeyboardEvent) => {
    if (key === targetKey) callback();
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  }, []);
};
