import { FC } from "react";
import { useCart } from "react-use-cart";
import s from "./Price.module.css";

interface PriceProps {}

const Price: FC<PriceProps> = ({}) => {
  const { cartTotal } = useCart();

  return (
    <div className={s.price}>
      <p className={s.title}>Стоимость корзины:</p>
      <p className={s.num}>{cartTotal}₽ </p>
    </div>
  );
};

export default Price;
