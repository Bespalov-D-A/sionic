import { FC } from "react";
import { useCart } from "react-use-cart";
import s from "./Top.module.css";

interface TopProps {}

const Top: FC<TopProps> = ({}) => {
  const { emptyCart } = useCart();

  return (
    <div className={s.top}>
      <h4 className={s.title}>Корзина</h4>
      <p className={s.clear}>
        <span className={s["clear__item"]} onClick={emptyCart}>
          Очистить корзину
        </span>
      </p>
    </div>
  );
};

export default Top;
