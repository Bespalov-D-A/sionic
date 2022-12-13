import { FC, useEffect, useRef, useState } from "react";
import { productService } from "../../../../API/productService";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { useGetProductsInCat } from "../../../../hooks/useGetProducts";
import { useLoader } from "../../../../hooks/useLoader";
import { useObserver } from "../../../../hooks/useObserverInfinteScroll";
import { usePagination } from "../../../../hooks/usePagination";
import {
  getProductsLengthByCategoryId,
} from "../../../../selectors/productSelector";
import { ADD_PRODUCTS_PACK, REMOVE_ALL_PRODUCTS } from "../../../../store/models/Product/Product";
import { params } from "../../../../types/apiTypes";
import {scrollTop} from "../../../../utilites/commonUtils";
import MainPresent from "./MainPresent";

interface MainProps {}

const Main: FC<MainProps> = ({}) => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);
  const [page, setPage] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number | null>(null);

  const limit: number = useAppSelector((state) => state.commonSlice.limit);
  const lastElementRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  //@ts-ignore
  const productsCount: number = getProductsLengthByCategoryId(state);
  const selectedCategory: number | null = useAppSelector(
    (state) => state.commonSlice.selectedCategory
  );
  const products = useGetProductsInCat(
    page,
    limit,
    productsCount,
    selectedCategory
  );
  //const productsCountInCat =
  const [isFetch, isLoad, error]: any = useLoader(async (params: params) => {
    //@ts-ignore
    const response = await productService.getProducts(params);
    const totalCountProduct: string | undefined =
      response.headers["content-range"];
    totalCountProduct &&
      setTotalCount(Number(totalCountProduct.match(/(?<=\/)[\d]*/)));
    dispatch({ type: ADD_PRODUCTS_PACK, payload: response.data });
  });

  //получаем массив с номера страниц
  const paginationNums = usePagination(totalCount, limit);

  const setPageFunc = (num:number) => {
    scrollTop()
    setTimeout(()=> {
    dispatch({type: REMOVE_ALL_PRODUCTS})
    setPage(num)
    }, 1000)
  }

  const rangeFunc = (page: number, limit: number, productsCount: number) => {
    const res = `[${((page - 1) * limit) + productsCount}, ${
      ((page - 1) * limit) + productsCount + 3
    }]`;

    return res;
  };


  useObserver({
    callback: () =>
      isFetch({
        filter: `{"category_id":${selectedCategory}}`,
        range: rangeFunc(page, limit, products.length),
      }),
    lastElementRef,
    isLoad,
    productsCount,
    selectedCategory,
    products,
    limit,
    page,
    totalCount
  });


  useEffect(() => {
    showMoreFunc()
      }, [selectedCategory, page]);

  const showMoreFunc = () => {
    const params = {
      filter: `{"category_id":${selectedCategory}}`,
      range: rangeFunc(page, limit, products.length)
    };
    isFetch(params);
  };

  return (
    <MainPresent
      error={error}
      selectedCategory={selectedCategory}
      products={products}
      showMoreFunc={showMoreFunc}
      lastElementRef={lastElementRef}
      isLoad={isLoad}
      pagesArray={paginationNums}
      page={page}
      setPage={setPageFunc}
    />
  );
};

export default Main;
