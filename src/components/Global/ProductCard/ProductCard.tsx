import React, { FC, useEffect, useState } from "react";
import Price from "./Price/Price";
import s from "./ProductCard.module.css";
import Tags from "./Tags/Tags";
import Btn from "./Btn/Btn";
import { IimageObj, IproductCard } from "../../../types/types";
import axios from "axios";

interface ProductCardProps {
  productCard: IproductCard;
}

const ProdcutCard: FC<ProductCardProps> = ({ productCard }) => {
  const [cover, setCover] = useState<string>("");

  useEffect(() => {
    getCover();
  }, []);

  const getCover = async () => {
    let resp = await axios.get<IimageObj>(
      "https://test2.sionic.ru/api/ProductImages/" + productCard.id
    );
    setCover("https://test2.sionic.ru/" + resp.data.image_url);
  };

  return (
    <div className={s["product-card"]}>
      <div className={s.header}>
        {cover.length == 0 ? (
          "Loading..."
        ) : (
          <>
            <img src={cover} alt="" className={s.cover} />
            <Tags />
          </>
        )}
      </div>
      <div className={s["title-block"]}>
        <p className={s.title}>{productCard.name}</p>
      </div>
      <Price />
      <Btn />
    </div>
  );
};

export default ProdcutCard;
