export const getTotalFunc = (totalCount:number | null, limit:number) => {
  if(!totalCount) return null
  return Math.ceil( totalCount / limit)
};

export const getPageNumbersFunc = (pageCount:number | null) => {
  if(!pageCount) return null
  let arr = [];
  for (let i = 1; i <= pageCount; i++) {
    arr.push(i);
  }
  return arr;
};

//Пагинация. Page - выбранная страница, pagesArray - массив страниц
//Поставим page по центру пагинации, справа и слева по 4 кнопки
export const getCurrentPositionFunc = (page:number, pagesArray:number[] | null) => {
  if(!pagesArray || !pagesArray.length) return []
  let newArr:any[] = [];
  //Если число страниц меньше 9
  const count = pagesArray.length < 9 ? pagesArray.length : 9;
  const len = pagesArray.length

  const calcValue = (val:number) => {
    if(val < 5) return val - 1
    else if(len - val < 5) return 4 + (4 - (len - val))
    else return 4
  }

  const calc = (num:number) => {
    if(num < 1 ) calc(num + 1)
    if (newArr.length === count) return;
    newArr.push(pagesArray[num - 1]);
    calc(num + 1);
  };

  calc(page - calcValue(page))
  return newArr;
};
