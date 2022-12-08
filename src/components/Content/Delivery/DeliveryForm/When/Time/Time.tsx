import DatePicker from "react-datepicker";
import { useAppDispatch } from "../../../../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../../../../hooks/useAppSelector";
import { setMinutes, setHours } from "date-fns";
import { registerLocale } from "react-datepicker";
import { updateTime } from "../../../../../../store/slices/deliveryFormSlice";
import s from "./Time.module.css";
import ru from "date-fns/locale/ru";
import { useField, useFormikContext } from "formik";
import InputErrMsg from "../../../../../common/InputErrMsg/InputErrMsg";
import { FC } from "react";
import CustomInputDate from "../Date/CustomInputDate/CustomInputDate";
import { compareDate, timeItems } from "../../../../../../utilites/dateUtil";
import { DateAndTimeNames } from "../../../../../../types/types";
registerLocale("ru", ru);

interface TimeFieldI {
  name: DateAndTimeNames;
}

const TimeField: FC<TimeFieldI> = (props) => {
  const [field, meta] = useField(props);
  const dispatch = useAppDispatch();
  const selectedTime = useAppSelector((state) => state.deliveryFormSlice.time);
  const selectedDate = useAppSelector((state) => state.deliveryFormSlice.date);
  const { setFieldValue } = useFormikContext();
  const maxTime = 19;

  const setTime = (date: Date) => {
    dispatch(updateTime(date.toString()));
  };

  const handlerChange = (date: Date) => {
    setFieldValue(props.name, date);
    setFieldValue(props.name, date);
    setTime(date);
  };
  return (
    <div className={s["time-pick"]}>
      <DatePicker
        customInput={
          <CustomInputDate
            nameInput={props.name}
            placeholder="Выберите время"
            field={field}
          />
        }
        locale="ru"
        minTime={
          compareDate(selectedDate, maxTime)
            ? setHours(setMinutes(new Date(), 0), maxTime)
            : setHours(setMinutes(new Date(), 0), 10)
        }
        maxTime={setHours(setMinutes(new Date(), 0), 19)}
        excludeTimes={timeItems()}
        placeholderText="Выберите время"
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={60}
        timeCaption="Время"
        dateFormat="hh:mm"
        selected={selectedTime ? new Date(selectedTime) : undefined}
        onChange={handlerChange}
        withPortal
      />
      <InputErrMsg
        style={{ top: "18px", left: !selectedDate ? '-4px' :"10px" }}
        msg={!selectedDate ? "Сначала выберите дату" : meta.error}
        touched={meta.touched}
      />
    </div>
  );
};

export default TimeField;
