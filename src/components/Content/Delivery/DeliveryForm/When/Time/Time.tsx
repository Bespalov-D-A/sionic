import { useField } from "formik";
import { FC } from "react";
import Select, { ActionMeta, StylesConfig } from "react-select";
import { useAppDispatch } from "../../../../../../hooks/useAppDispatch";
import {
  timeI,
  updateTime,
} from "../../../../../../store/slices/deliveryFormSlice";
import s from "./Time.module.css";
import "./Time.css";
import InputErrMsg from "../../../../../common/InputErrMsg/InputErrMsg";

interface TimeProps {
  name: string;
}

export const timeOptions = [
  { value: "10:00", label: "10:00" },
  { value: "11:00", label: "11:00" },
  { value: "12:00", label: "12:00" },
  { value: "13:00", label: "13:00" },
  { value: "14:00", label: "14:00" },
  { value: "15:00", label: "15:00" },
  { value: "16:00", label: "16:00" },
  { value: "17:00", label: "17:00" },
  { value: "18:00", label: "18:00" },
  { value: "19:00", label: "19:00" },
  { value: "20:00", label: "20:00" },
];

const Time: FC<TimeProps> = (props) => {
  const { name } = props;
  const [field, meta, helper] = useField(props);
  const dispatch = useAppDispatch();
  const setTime = (value: timeI) => {
    dispatch(updateTime(value));
  };

  //@ts-ignore
  const onChange = (option: Option | null, actionMeta: ActionMeta<Option>) => {
    helper.setValue(option);
    setTime(option);
  };

  const colourStyles: StylesConfig<any> = {
    option: (styles, state) => ({
      ...styles,
      backgroundColor: state.isFocused
        ? "#b2d3fd"
        : state.isSelected
        ? "#2983FB"
        : "#fff",
      cursor: state.isFocused ? 'pointer' : 'arrow'
    }),
    singleValue: (styles ) => ({...styles, color: '#727280'}),
  };

  const themeFunc = (theme: any) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary: "white",
    },
  });

  return (
    <div className={s.time}>
      <Select
        isSearchable={false}
        onChange={onChange}
        classNamePrefix="select"
        name={name}
        placeholder="Выберите время"
        value={field.value}
        theme={themeFunc}
        //@ts-ignore
        styles={colourStyles}
        options={timeOptions}
      />
      <InputErrMsg style={{top: '18px'}} msg={meta.error} touched={meta.touched}/>
    </div>
  );
};

export default Time;
