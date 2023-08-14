export const errorBoundary =
  <Args extends any[]>(target: (...args: Args) => any) =>
  async (...args: Args) => {
    try {
      await target(...args);
    } catch (err) {
      console.log(err);
    }
  };
