import { FC, useRef } from "react";
import DatePicker from "react-datepicker";
import { useAppDispatch } from "../../../../../../hooks/useAppDispatch";
import { updateDate } from "../../../../../../store/slices/deliveryFormSlice";
import { useAppSelector } from "../../../../../../hooks/useAppSelector";
import { registerLocale } from "react-datepicker";
import s from "./Date.module.css";
import ru from "date-fns/locale/ru";
import CustomInputDate from "./CustomInputDate/CustomInputDate";
import { useField, useFormikContext } from "formik";
import InputErrMsg from "../../../../../common/InputErrMsg/InputErrMsg";
registerLocale("ru", ru);

interface DateFieldI {
  name: string;
}

const DateField: FC<DateFieldI> = (props) => {
  const [field, meta] = useField(props);
  const dispatch = useAppDispatch();
  const selectedDate = useAppSelector((state) => state.deliveryFormSlice.date);
  const { setFieldValue } = useFormikContext();

  const setDate = (date: Date) => {
    dispatch(updateDate(date.toString()));
  };

  const handlerChange = (date: Date) => {
    setFieldValue("date", date);
    setDate(date);
  };

  return (
    <div className={s["date-pick"]}>
      <DatePicker
        customInput={<CustomInputDate placeholder='Выберите дату' name={props.name} field={field} />}
        locale="ru"
        minDate={new Date()}
        placeholderText="Выберите дату"
        dateFormat="dd.MM.yyyy"
        selected={selectedDate ? new Date(selectedDate) : undefined}
        onChange={handlerChange}
        withPortal
      />
      <InputErrMsg
        style={{ top: "18px", left: "10px" }}
        msg={meta.error}
        touched={meta.touched}
      />
    </div>
  );
};

export default DateField;
