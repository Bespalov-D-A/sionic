import { useEffect, useRef } from "react";

interface IUserObserver {
  callback: ()=>void,
    lastElementRef:React.MutableRefObject<HTMLDivElement>,
    isLoad: boolean,
    productsCount: number,
    selectedCategory: number | null

}

export const useObserver = ({selectedCategory, callback, lastElementRef, isLoad, productsCount}:IUserObserver) => {
  const observer:any = useRef();

  //Бесконечная лента постов с подгрузкой
  useEffect(() => {
    if (isLoad || !productsCount || !selectedCategory) return; //Если загрузка идёт не трогаем observer
    if (observer.current) observer.current.disconnect(); //Если обсервер создан удаляем для нового
    let func = (entries:any) => {
      if (entries[0].isIntersecting) callback();
    };
    observer.current = new IntersectionObserver(func);
    observer.current.observe(lastElementRef.current);
    return () => observer.current.disconnect();
  }, [isLoad]);
};
