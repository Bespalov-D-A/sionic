import React, { FC, useEffect, useState } from "react";
import Price from "./Price/Price";
import s from "./ProductCard.module.css";
import Tags from "./Tags/Tags";
import Btn from "./Btn/Btn";
import Variation from "../Variation/Variation";
import {orm} from "../../../store/models/models";
import {useAppSelector} from "../../../store/hooks/hooks";
import {Iproduct} from "../../../types/dataShopApiTypes";

interface ProductCardProps {
  productCard: Iproduct;
}

const ProdcutCard: FC<ProductCardProps> = ({ productCard }) => {
  const state = useAppSelector(state => state)
    const session = orm.mutableSession(state.ormReducer)
    const cover = session.Cover.at(productCard.id)
    //let ggg = session.ProductCover.all().at(productCard.id)
    console.log(productCard)

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
