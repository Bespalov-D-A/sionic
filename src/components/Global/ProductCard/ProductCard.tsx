import React, { FC } from "react";
import Price from "./Price/Price";
import s from "./ProductCard.module.css";
import Tags from "./Tags/Tags";
import image from './../../../img/product.png'
import Btn from "./Btn/Btn";
import {IproductCard} from "../../../types/types";

interface ProductCardProps {
  productCard: IproductCard;
}

const ProdcutCard: FC<ProductCardProps> = ({productCard}) => {
  return (
    <div className={s["product-card"]}>
      <div className={s.header}>
        <img src={image} alt="" />
        <Tags />
      </div>
      <div className={s['title-block']}>
<p className={s.title}>{productCard.name}</p>
      </div>
      <Price /> 
      <Btn />
    </div>
  );
};

export default ProdcutCard;
