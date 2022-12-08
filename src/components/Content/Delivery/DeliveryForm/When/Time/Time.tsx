import DatePicker from "react-datepicker";
import { useAppDispatch } from "../../../../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../../../../hooks/useAppSelector";
import { format, setMinutes, setHours } from "date-fns";
import { registerLocale } from "react-datepicker";
import { updateTime } from "../../../../../../store/slices/deliveryFormSlice";
import s from "./Time.module.css";
import ru from "date-fns/locale/ru";
import { useField, useFormikContext } from "formik";
import InputErrMsg from "../../../../../common/InputErrMsg/InputErrMsg";
import { FC } from "react";
import CustomInputDate from "../Date/CustomInputDate/CustomInputDate";
registerLocale("ru", ru);

interface TimeFieldI {
  name: string;
}

export const currentHour = Number(format(new Date(), "h"));

const TimeField: FC<TimeFieldI> = (props) => {
  const [field, meta] = useField(props);
  const dispatch = useAppDispatch();
  const selectedTime = useAppSelector((state) => state.deliveryFormSlice.time);
  const { setFieldValue } = useFormikContext();

  const setTime = (date: Date) => {
    dispatch(updateTime(date.toString()));
  };

  const handlerChange = (date: Date) => {
    setFieldValue(props.name, date);
    setTime(date);
  };

  return (
    <div className={s["time-pick"]}>
      <DatePicker
        customInput={
          <CustomInputDate
            name={props.name}
            placeholder="Выберите время"
            field={field}
          />
        }
        locale="ru"
        minTime={setHours(setMinutes(new Date(), 0), currentHour + 4)}
        maxTime={setHours(setMinutes(new Date(), 0), 19)}
        minDate={new Date("12:00")}
        placeholderText="Выберите время"
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={30}
        timeCaption="Время"
        dateFormat="h:mm"
        selected={selectedTime ? new Date(selectedTime) : undefined}
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

export default TimeField;
