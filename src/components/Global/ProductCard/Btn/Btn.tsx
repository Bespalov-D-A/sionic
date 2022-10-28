import React, { FC } from "react";
import s from "./Btn.module.css";

interface BtnProps {}

const Btn: FC<BtnProps> = ({}) => {
  return <input type="button" value="Добавить в корзину" className={s.btn} />;
};

export default Btn;
