import { useField } from "formik";
import React, { FC } from "react";
import { useAppDispatch } from "../../../../../hooks/useAppDispatch";
import { updateName } from "../../../../../store/slices/deliveryFormSlice";
import s from "./Name.module.css";

interface NameI {
  name: string;
}

const Name: FC<NameI> = (props) => {
  const [field, meta, helper] = useField(props);
  const dispatch = useAppDispatch();
  const setName = (value: string) => {
    dispatch(updateName(value));
  };

  const newOnChangeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    field.onChange(e);
    setName(e.target.value);
  };

  const newField = { ...field, onChange: newOnChangeFunc };

  return (
    <div className={s.name}>
      <h4 className={s.title}>Имя</h4>
      <div className={s["name-input-block"]}>
        <input {...newField} type="text" className={s["name-input"]} />
      </div>
    </div>
  );
};

export default Name;
