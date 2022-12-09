import React, { FC } from "react";
import s from "./Btn.module.css";

interface BtnProps {
  isDisabled: boolean;
  addCart: () => void;
}

const Btn: FC<BtnProps> = ({ isDisabled, addCart }) => {
  const style = { opacity: isDisabled ? "0.4" : 1 };
  return (
    <input
      type="button"
      disabled={isDisabled}
      style={style}
      onClick={addCart}
      value="Добавить в корзину"
      className={s.btn}
    />
  );
};

export default Btn;
