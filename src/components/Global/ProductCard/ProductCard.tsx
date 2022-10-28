import React, { FC } from "react";
import Price from "./Price/Price";
import s from "./ProductCard.module.css";
import Tags from "./Tags/Tags";
import image from './../../../img/product.png'
import Btn from "./Btn/Btn";

interface ProductCardProps {}

const ProdcutCard: FC<ProductCardProps> = ({}) => {
  return (
    <div className={s["product-card"]}>
      <div className={s.header}>
        <img src={image} alt="" />
        <Tags />
      </div>
      <div className={s['title-block']}>
<p className={s.title}>Длинное название товара в одну строчку п...</p>
      </div>
      <Price /> 
      <Btn />
    </div>
  );
};

export default ProdcutCard;
