import { FC, useEffect } from "react";
import { productService } from "../../../../API/productService";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { useLoader } from "../../../../hooks/useLoader";
import { getProductsByCategoryId } from "../../../../selectors/productSelector";
import { ADD_PRODUCTS_PACK } from "../../../../store/models/Product/Product";
import {params} from "../../../../types/apiTypes";
import { IProduct } from "../../../../types/productTypes";
import List from "../../../common/List";
import ProductCard from "../../../common/ProductCard/ProductCard";
import s from "./Main.module.css";

interface MainProps {}

const Main: FC<MainProps> = ({}) => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);
  const limit:number = useAppSelector(state => state.commonSlice.limit)
  const products = getProductsByCategoryId(state);
  const [isFetch, isLoad, error]: any = useLoader(async (params: params) => {
    //@ts-ignore
    const response = await productService.getProducts(params);
    dispatch({ type: ADD_PRODUCTS_PACK, payload: response.data });
  });

  useEffect(() => {
    isFetch({
      filter: `{"category_id":${3}}`,
      range: `[0, ${limit}]`
    });
  }, []);


  return (
    <div className={s.main}>
      {isLoad ? 'LOADING!!!!' :
      !error ?
      <List
        //@ts-ignore
        items={products}
        renderItem={(productCard: IProduct) => (
          <ProductCard productCard={productCard} key={productCard.id} />
        )}
      /> : 'Ошибка загрузки данных'}
    </div>
  );
};

export default Main;
