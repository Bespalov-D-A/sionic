import React, { FC, useEffect, useState } from "react";
import Price from "./Price/Price";
import s from "./ProductCard.module.css";
import Tags from "./Tags/Tags";
import Btn from "./Btn/Btn";
import { IimageObj, IproductCard } from "../../../types/types";
import axios from "axios";
import Variation from "../Variation/Variation";
import {getCover} from "../../../api/api";

interface ProductCardProps {
  productCard: IproductCard;
}

const ProdcutCard: FC<ProductCardProps> = ({ productCard }) => {
  const [cover, setCover] = useState<string | undefined>("");


  return (
    <div className={s["product-card"]}>
      <Variation productID={productCard.id}/>
      <div className={s.header}>
        {cover?.length == 0 ? (
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
