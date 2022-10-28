import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { IproductCard } from "../../../../types/types";
import List from "../../../Global/List";
import ProductCard from "../../../Global/ProductCard/ProductCard";
import s from "./Main.module.css";

interface MainProps {}

const Main: FC<MainProps> = ({}) => {
  const [products, setProducts] = useState<IproductCard[]>([]);

  useEffect(() => {
    getProducts(setProducts);
  }, []);

  const getProducts = async (callback: any) => {
    try {
      const resp = await axios.get("https://test2.sionic.ru/api/Products?range=[0,10]");
      callback(resp.data);
    } catch (e) {
      console.log(e);
    }
  };

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
