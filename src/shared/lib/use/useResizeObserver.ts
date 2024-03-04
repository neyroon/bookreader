import { useLayoutEffect, useRef } from 'react';

export function useResizeObserver<T extends HTMLElement>(callback: (target: T, entry: ResizeObserverEntry) => void) {
  const ref = useRef<T>(null);

  const debounce = () => {
    let timer: ReturnType<typeof setTimeout> | undefined;

    return function (...args: Parameters<typeof callback>) {
      clearTimeout(timer);

      timer = setTimeout(() => {
        callback(...args);
      }, 500);
    };
  };

  useLayoutEffect(() => {
    const element = ref?.current;

    if (!element) {
      return;
    }

    const debouncedCallback = debounce();

    const observer = new ResizeObserver((entries) => debouncedCallback(element, entries[0]));

    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [callback, ref]);

  return ref;
}
