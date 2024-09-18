export const makeId = (str: string) =>
  encodeURIComponent(
    str
      .toLowerCase()
      .trim()
      .replace(/[^a-zA-Z0-9]+/gi, "-"),
  );
