import React, { FC } from "react";
import s from "./Btn.module.css";

interface BtnProps {
  addCart: () => void
}

const Btn: FC<BtnProps> = ({addCart}) => {
  return <input type="button" onClick={addCart} value="Добавить в корзину" className={s.btn} />;
};

export default Btn;
