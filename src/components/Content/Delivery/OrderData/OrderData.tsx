import React, { FC } from "react";
import s from "./OrderData.module.css";

interface OrederDataProps {}

const OrederData: FC<OrederDataProps> = ({}) => {
  return (
    <div className={s["order-data"]}>
      <div className={s.wrapper}>
        <div>
          <p className={s.cost}>
            Стоимость доставки: <span className={s.num}>200 584₽</span>
          </p>
          <p className={s.cost}>
            Стоимость товаров: <span className={s.num}>200₽</span>
          </p>
        </div>
        <p className={s.total}>
          Итого: <span className={s.num}>200 784₽</span>
        </p>
      </div>
      <input type="button" value='Сделать заказ' className={s.btn + ' blue-btn'} />
    </div>
  );
};

export default OrederData;
