import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import {getProducts} from "../../../../api/api";
import { IproductCard } from "../../../../types/types";
import List from "../../../Global/List";
import ProductCard from "../../../Global/ProductCard/ProductCard";
import s from "./Main.module.css";

interface MainProps {}

const Main: FC<MainProps> = ({}) => {
  const [products, setProducts] = useState<IproductCard[] | undefined>([]);

  useEffect(() => {
    let newProducts = getProducts();
    newProducts.then(res => setProducts(res))
  }, []);

  return (
    <div className={s.main}>
      <List
        items={products}
        renderItem={(productCard: IproductCard) => (
          <ProductCard productCard={productCard} key={productCard.id} />
        )}
      />
    </div>
  );
};

export default Main;
