import {useField} from "formik";
import React, {FC} from "react";
import {useAppDispatch} from "../../../../../hooks/useAppDispatch";
import {updateAddress} from "../../../../../store/slices/deliveryFormSlice";
import Address from "./Address/Address";
import s from './Location.module.css'

interface LocationProps {
  name: string
}

const Location: FC<LocationProps> = (props) => {
  const [field, meta, helper] = useField(props);
  const dispatch = useAppDispatch();
  const setAddress = (value: string) => {
    dispatch(updateAddress(value));
  };

  const newOnChangeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    field.onChange(e);
    setAddress(e.target.value);
  };

  const newField = { ...field, onChange: newOnChangeFunc };

  return <div className={s.location}>
    <h4 className={s.title}>Куда доставить?</h4>
    <Address meta={meta} field={newField} />
  </div>;
};

export default Location;
