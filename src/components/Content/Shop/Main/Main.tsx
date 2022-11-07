import React, { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../../../store/hooks/hooks";
import { orm } from "../../../../store/models/models";
import { Iproduct } from "../../../../types/dataShopApiTypes";
import { productsType } from "../../../../types/types";
import List from "../../../Global/List";
import ProductCard from "../../../Global/ProductCard/ProductCard";
import s from "./Main.module.css";

interface MainProps {}

const Main: FC<MainProps> = ({}) => {
  const [products, setProducts] = useState<productsType>([]);
  const state = useAppSelector((state: any) => state);

  useEffect(() => {
    const session = orm.session(state.ormReducer)
    const productArray = session.Product.all().toModelArray().map(item => {return item.ref})
    setProducts(productArray)
  }, []);

  return (
    <div className={s.main}>
      <List
        items={products}
        renderItem={(productCard: Iproduct) => (
          <ProductCard productCard={productCard} key={productCard.id} />
        )}
      />
    </div>
  );
};

export default Main;
