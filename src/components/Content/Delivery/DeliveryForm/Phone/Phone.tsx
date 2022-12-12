import {useField} from "formik";
import React, {FC} from "react";
import {useAppDispatch} from "../../../../../hooks/useAppDispatch";
import {updatePhone} from "../../../../../store/slices/deliveryFormSlice";
import InputErrMsg from "../../../../common/InputErrMsg/InputErrMsg";
import s from './Phone.module.css'

interface PhoneProps {
  name: string
}

const Phone: FC<PhoneProps> = (props) => {
  const [field, meta, ] = useField(props);
  const dispatch = useAppDispatch();
  const setPhone = (value: string) => {
    dispatch(updatePhone(value));
  };

  const newOnChangeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    field.onChange(e);
    setPhone(e.target.value);
  };

  const newField = { ...field, onChange: newOnChangeFunc };


  return (
    <div className={s.phone}>
      <h4 className={s.title}>Телефон</h4>
      <div className={s["phone-input-block"]}>
        <input {...newField} type="text" className={s["phone-input"]} />
        <InputErrMsg touched={meta.touched} msg={meta.error}/>
      </div>
    </div>
  );

};

export default Phone;
