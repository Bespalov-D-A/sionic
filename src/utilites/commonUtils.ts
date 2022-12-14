export const scrollTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

export const getNumberInString = (str:string) => {
  if(!str) return null
  return Number(str.match(/(?<=\/)[\d]*/))
}

export const rangeFunc = (page: number, limit: number, productsCount: number) => {
    const res = `[${(page - 1) * limit + productsCount}, ${
      (page - 1) * limit + productsCount + 3
    }]`;
    return res;
  };

