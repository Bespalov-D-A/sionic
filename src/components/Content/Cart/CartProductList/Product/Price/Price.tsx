import  { FC } from "react";
import s from "./Price.module.css";

interface PriceProps {
  price: number
}

const Price: FC<PriceProps> = ({price}) => {
  return (
    <div className={s.price}>
      <p className={s.current}>{price} ₽</p>
      <p className={s.discount}>450 500 ₽</p>
    </div>
  );
};

export default Price;
