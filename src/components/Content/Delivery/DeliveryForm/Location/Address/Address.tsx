import React, { FC } from "react";
import s from "./Address.module.css";

interface AddressProps {
  field: any
}

const Address: FC<AddressProps> = ({field}) => {
  return (
    <div className={s.address}>
      <input {...field} type="text" className={s["input-field"]} />
      <span className={s.placeholder}>Выберите адрес доставки</span>
    </div>
  );
};

export default Address;
