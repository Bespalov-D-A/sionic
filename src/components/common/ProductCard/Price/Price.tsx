import React, { FC } from "react";
import {IProductVariation} from "../../../../types/productTypes";
import s from "./Price.module.css";

interface PriceProps {
  price: number | undefined
}

const Price: FC<PriceProps> = ({price}) => {

  return (
    <div className={s.price}>
      <h3 className={s.title}>{price ? price : 'ошибка'} ₽</h3>
      <div className={s["discount-block"]}>
        <span className={s.before}>450 000 ₽</span>
        <span className={s.discount}>10%</span>
      </div>
    </div>
  );
};

export default Price;
