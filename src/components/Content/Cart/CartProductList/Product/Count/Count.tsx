import { FC, useState } from "react";
import { useCart } from "react-use-cart";
import s from "./Count.module.css";

interface CountProps {
  productId: string;
  quantity: any;
}

const Count: FC<CountProps> = ({ productId, quantity }) => {
  const [count, setCount] = useState<number>(quantity);
  const { updateItemQuantity } = useCart();

  const editQuantity = (value: string) => {
    switch (value) {
      case "plus":
        setCount(count + 1);
        updateItemQuantity(productId, count + 1);
        break;
      case "minus":
        if (count - 1 === 0) break;
        setCount(count - 1);
        updateItemQuantity(productId, count - 1);
        break;
    }
  };

  return (
    <div className={s["count-block"]}>
      <input
        type="button"
        onClick={() => editQuantity("minus")}
        className={s.minus + " " + s.btn}
      />
      <span className={s.count}>{count}</span>
      <input
        type="button"
        onClick={() => editQuantity("plus")}
        className={s.plus + " " + s.btn}
      />
    </div>
  );
};

export default Count;
