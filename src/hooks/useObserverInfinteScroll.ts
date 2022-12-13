import { useEffect, useRef } from "react";
import { IProduct } from "../types/productTypes";

interface IUserObserver {
  callback: () => void;
  lastElementRef: React.MutableRefObject<HTMLDivElement>;
  isLoad: boolean;
  productsCount: number;
  selectedCategory: number | null;
  products: IProduct[] | unknown;
  limit: number;
  page:number,
    totalCount: number | null
}

export const useObserver = ({
  selectedCategory,
  callback,
  products,
  limit,
  lastElementRef,
  isLoad,
  productsCount,
  page,
  totalCount
}: IUserObserver) => {
  const observer: any = useRef();
  
  //Бесконечная лента постов с подгрузкой
  useEffect(() => {
    if (
      isLoad ||
      !selectedCategory ||
      !Array.isArray(products) ||
      !totalCount
          )
      return; //Если загрузка идёт не трогаем observer
    if (products.length >= limit) return;
    if(((page -1 ) * limit + productsCount >= totalCount)) return

    if (observer.current) observer.current.disconnect(); //Если обсервер создан удаляем для нового
    let func = (entries: any) => {
      if (entries[0].isIntersecting) callback();
    };
    observer.current = new IntersectionObserver(func);
    observer.current.observe(lastElementRef.current);
    return () => observer.current.disconnect();
  }, [isLoad]);
};
