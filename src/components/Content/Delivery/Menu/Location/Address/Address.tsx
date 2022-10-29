import React, { FC } from "react";
import s from "./Address.module.css";

interface AddressProps {}

const Address: FC<AddressProps> = ({}) => {
  return (
    <div className={s.address}>
      <input type="text" className={s["input-field"]} />
      <span className={s.placeholder}>Выберите адрес доставки</span>
    </div>
  );
};

export default Address;
