import { FC } from "react";
import DatePicker from "react-datepicker";
import { useAppDispatch } from "../../../../../../hooks/useAppDispatch";
import {
  updateDate,
  updateTime,
} from "../../../../../../store/slices/deliveryFormSlice";
import { useAppSelector } from "../../../../../../hooks/useAppSelector";
import { registerLocale } from "react-datepicker";
import s from "./Date.module.css";
import ru from "date-fns/locale/ru";
import { format, addDays} from "date-fns";
import CustomInputDate from "./CustomInputDate/CustomInputDate";
import { useField, useFormikContext } from "formik";
import InputErrMsg from "../../../../../common/InputErrMsg/InputErrMsg";
import { DateAndTimeNames } from "../../../../../../types/types";
registerLocale("ru", ru);

interface DateFieldI {
  name: DateAndTimeNames;
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
    if (field.value) {
      setFieldValue("time", null);
      updateTime(null);
    }
    setFieldValue(props.name, date);
    setDate(date);
  };

  return (
    <div className={s["date-pick"]}>
      <DatePicker
        customInput={
          <CustomInputDate
            placeholder="Выберите дату"
            nameInput={props.name}
            field={field}
          />
        }
        locale="ru"
        minDate={new Date()}
        maxDate={addDays(new Date(), 30)}
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
