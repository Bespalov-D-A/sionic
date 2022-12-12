import { FC, useEffect, useRef } from "react";
import { productService } from "../../../../API/productService";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { useLoader } from "../../../../hooks/useLoader";
import { useObserver } from "../../../../hooks/useObserverInfinteScroll";
import {
  getProductsByCategoryId,
  getProductsLengthByCategoryId,
} from "../../../../selectors/productSelector";
import { ADD_PRODUCTS_PACK } from "../../../../store/models/Product/Product";
import { params } from "../../../../types/apiTypes";
import MainPresent from "./MainPresent";

interface MainProps {}

const Main: FC<MainProps> = ({}) => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);
  const limit: number = useAppSelector((state) => state.commonSlice.limit);
  const lastElementRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  //@ts-ignore
  const productsCount: number = getProductsLengthByCategoryId(state);
  const selectedCategory: number | null = useAppSelector(
    (state) => state.commonSlice.selectedCategory
  );
  const products = getProductsByCategoryId(state);
  //const productsCountInCat =
  const [isFetch, isLoad, error]: any = useLoader(async (params: params) => {
    //@ts-ignore
    const response = await productService.getProducts(params);
    dispatch({ type: ADD_PRODUCTS_PACK, payload: response.data });
  });

  useObserver({
    callback: () =>
      isFetch({
        filter: `{"category_id":${selectedCategory}}`,
        range: `[${productsCount}, ${productsCount + 3}]`,
      }),
    lastElementRef,
    isLoad,
    productsCount,
    selectedCategory,
  });

  useEffect(() => {
    if (productsCount === 0) {
      let params = {
        filter: `{"category_id":${selectedCategory}}`,
        range: `[0, ${3}]`,
      };
      isFetch(params);
    }
  }, [selectedCategory]);

  const showMoreFunc = () => {
    const params = {
      filter: `{"category_id":${selectedCategory}}`,
      range: `[${productsCount},${productsCount + (limit - 1)}]`,
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
    />
  );
};

export default Main;
