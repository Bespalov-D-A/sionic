import { useMemo } from "react";
import { getPageNumbersFunc, getTotalFunc } from "./../utilites/pagination";

export const usePagination = (totalCount:number | null, limit:number) => {
  const getTotal = useMemo(() => {
      return getTotalFunc(totalCount, limit);
    }, [totalCount]);
  
  const getPageNumber = useMemo(() => {
    return getPageNumbersFunc(getTotal) 
    }, [ getTotal]);

  return getPageNumber
};
