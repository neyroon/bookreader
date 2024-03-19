import { RefObject, useEffect } from 'react';

const defaultOptions: MutationObserverInit = {
  attributes: false,
  characterData: false,
  childList: true,
  subtree: true,
};

export const useMutationObserver = <T extends HTMLElement>(
  ref: RefObject<T>,
  callback: MutationCallback,
  options: MutationObserverInit = defaultOptions,
) => {
  useEffect(() => {
    const observer = new MutationObserver(callback);

    ref.current && observer.observe(ref.current, options);

    return () => observer.disconnect();
  }, [ref, callback, options]);
};
