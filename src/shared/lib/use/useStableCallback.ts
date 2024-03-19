import { useCallback, useEffect, useRef } from 'react';

export const useStableCallback = <T extends (...args: Parameters<T>) => ReturnType<T>>(callback: T) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  return useCallback(
    (...args: Parameters<T>) => {
      ref.current && ref.current(...args);
    },
    [ref],
  );
};
