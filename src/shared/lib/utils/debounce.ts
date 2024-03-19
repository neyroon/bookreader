export const debounce = <T extends (...args: Parameters<T>) => ReturnType<T>>(callback: T, waitFor: number = 500) => {
  let timer: ReturnType<typeof setTimeout> | undefined;

  return function (...args: Parameters<T>) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      callback(...args);
    }, waitFor);
  };
};
