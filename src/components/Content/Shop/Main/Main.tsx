import { FC, useEffect } from "react";
import { productService } from "../../../../API/productService";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { useLoader } from "../../../../hooks/useLoader";
import { getProductsByCategoryId } from "../../../../selectors/productSelector";
import { ADD_PRODUCTS_PACK } from "../../../../store/models/Product/Product";
import { IProduct } from "../../../../types/productTypes";
import List from "../../../common/List";
import ProductCard from "../../../common/ProductCard/ProductCard";
import s from "./Main.module.css";

interface MainProps {}

const Main: FC<MainProps> = ({}) => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);
  const [isFetch, isLoad, error]: any = useLoader(async () => {
    const params = {
      filter: `{"category_id":${3}}`,
    };
    const response = await productService.getProducts(params);
    dispatch({ type: ADD_PRODUCTS_PACK, payload: response.data });
  });

  useEffect(() => {
    isFetch();
  }, []);

  const products = getProductsByCategoryId(state);

  return (
    <div className={s.main}>
      <List
        //@ts-ignore
        items={products}
        renderItem={(productCard: IProduct) => (
          <ProductCard productCard={productCard} key={productCard.id} />
        )}
      />
    </div>
  );
};

export default Main;
