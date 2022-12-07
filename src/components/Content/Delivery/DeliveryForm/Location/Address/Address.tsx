import React, { FC, useState } from "react";
import s from "./Address.module.css";

interface AddressProps {
  field: any;
}

const Address: FC<AddressProps> = ({ field }) => {
  const [isFocus, setIsFocus] = useState(false);

  const handleFunc = (e: any) => {
    const newType: "focus" | "blur" = e.type;
    switch (newType) {
      case "focus":
        setIsFocus(true);
        break;
      case "blur":
        setIsFocus(false);
        break;
    }
  };

  const newField = { ...field, onFocus: handleFunc, onBlur: handleFunc };
  return (
    <div className={s.address}>
      <input {...newField} type="text" className={s["input-field"]} />
      <span className={s.placeholder + " " + (isFocus ? s["inFocus"] : "")}>
        Выберите адрес доставки
      </span>
    </div>
  );
};

export default Address;
