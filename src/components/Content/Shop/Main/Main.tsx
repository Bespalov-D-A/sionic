import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Ref } from "redux-orm";
import { useAppSelector } from "../../../../store/hooks/hooks";
import { orm } from "../../../../store/models/models";
import { itIsProduct } from "../../../../store/selectors/book";
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
    console.log(state)
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
