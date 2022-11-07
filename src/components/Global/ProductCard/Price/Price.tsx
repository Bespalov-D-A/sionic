import React, { FC, } from "react";
import {Ivariation} from "../../../../types/dataShopApiTypes";
import s from "./Price.module.css";

interface PriceProps {
  selectedVariation: Ivariation | null;
}

const Price: FC<PriceProps> = ({ selectedVariation }) => {
  return (
    <div className={s.price}>
      <h3 className={s.title}>от {
        selectedVariation ? selectedVariation.price : 'Загрузка...'
      } ₽</h3>
      <div className={s["discount-block"]}>
        <span className={s.before}>450 000 ₽</span>
        <span className={s.discount}>10%</span>
      </div>
    </div>
  );
};

export default Price;
