import React, { FC } from "react";
import s from "./Top.module.css";

interface TopProps {}

const Top: FC<TopProps> = ({}) => {
  return (
    <div className={s.top}>
      <h4 className={s.title}>Корзина</h4>
      <p className={s.clear}>
        <a href="#" className={s.link}>
          Очистить корзину
        </a>
      </p>
    </div>
  );
};

export default Top;
