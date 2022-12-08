import  { FC, useEffect, useState } from "react";
import InputErrMsg from "../../../../../common/InputErrMsg/InputErrMsg";
import s from "./Address.module.css";

interface AddressProps {
  field: any;
  meta: any;
}

const Address: FC<AddressProps> = ({ meta, field }) => {
  const [isFocus, setIsFocus] = useState(field.value === "" ? false : true);

  useEffect(() => {
    if (field.value === "") setIsFocus(false);
    else setIsFocus(true);
  }, [field.value]);

  const handleFunc = (e: any) => {
    const value = e.target.value;
    const newType: "focus" | "blur" = e.type;
    switch (newType) {
      case "focus":
        if (value === "") setIsFocus(true);
        break;
      case "blur":
        if (value === "") setIsFocus(false);
        break;
    }

    field.onBlur(e);
  };

  const newField = { ...field, onFocus: handleFunc, onBlur: handleFunc };
  return (
    <div className={s.address}>
      <input {...newField} type="text" className={s["input-field"]} />
      <span className={s.placeholder + " " + (isFocus ? s["inFocus"] : "")}>
        Выберите адрес доставки
      </span>
      {!isFocus && <InputErrMsg msg={meta.error} touched={meta.touched} />}
    </div>
  );
};

export default Address;
