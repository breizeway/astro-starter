export const debounce = <P extends Parameters<any>>(
  callback: (...p: P) => void,
  delay: number | undefined = 200,
): ((...p: P) => void) => {
  let timeout: NodeJS.Timeout | undefined;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

export const throttle = <P extends Parameters<any>>(
  callback: (...p: P) => void,
  delay: number | undefined = 200,
): ((...p: P) => void) => {
  let shouldWait: boolean = false;

  return (...args) => {
    if (shouldWait) return;

    shouldWait = true;
    setTimeout(() => {
      callback(...args);
      shouldWait = false;
    }, delay);
  };
};
