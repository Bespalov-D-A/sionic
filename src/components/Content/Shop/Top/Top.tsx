import React, { FC } from "react";
import s from "./Top.module.css";

interface TopProps {}

const Top: FC<TopProps> = ({}) => {
  return (
    <div className={s["header-shop"]}>
      <h1 className={s.title}>Категории товаров</h1>
      <p className={s["cat-setting"]}>
        <a href="#" className={s.link}>
          Настройки
        </a>
      </p>
    </div>
  );
};

export default Top;
