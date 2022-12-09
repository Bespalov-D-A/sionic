import format from "format-number";

export const numFormat = (num: number | string, integerSeparator: string) => {
  return format({ integerSeparator })(Number(num));
};
