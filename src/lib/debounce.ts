export function debounce(callback: (...args: any) => any, timer: number) {
  let timerId: any | string = null;

  return (...args: any) => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => {
      callback(args);

      timerId = null;
    }, timer);
  };
}
