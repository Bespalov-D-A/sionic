import React, { FC } from "react";
import s from "./Sale.module.css";

interface SaleProps {}

const Sale: FC<SaleProps> = ({}) => {
  return (
    <div className={s.sale}>
      <p className={s.title}>
        Получай товары
        <br />
        БЕСПЛАТНО!
      </p>
      <input type="button" value="Узнать подробнее" className={s.btn} />
    </div>
  );
};

export default Sale;
