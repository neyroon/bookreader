import { useLayoutEffect, useRef } from 'react';
import { debounce } from '../utils/debounce';

export function useResizeObserver<T extends HTMLElement>(
  cb: (entry: ResizeObserverEntry, target: T) => void,
  waitFor: number = 500,
) {
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const element = ref?.current;

    if (!element) {
      return;
    }

    const debouncedCallback = debounce(cb, waitFor);

    const observer = new ResizeObserver((entries) => debouncedCallback(entries[0], element));

    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [cb, waitFor]);

  return ref;
}
