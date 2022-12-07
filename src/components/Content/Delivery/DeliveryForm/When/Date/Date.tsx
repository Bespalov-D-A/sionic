import { FC,  } from "react";
import DatePicker from "react-datepicker";
import { useAppDispatch } from "../../../../../../hooks/useAppDispatch";
import { updateDate } from "../../../../../../store/slices/deliveryFormSlice";
import { useAppSelector } from "../../../../../../hooks/useAppSelector";
import { registerLocale, } from "react-datepicker";
import s from './Date.module.css'
import ru from "date-fns/locale/ru";
import CustomInputDate from "./CustomInputDate/CustomInputDate";
registerLocale("ru", ru);

interface DateFieldI { }

const DateField: FC<DateFieldI> = () => {
  const dispatch = useAppDispatch();
  const selectedDate = useAppSelector((state) => state.deliveryFormSlice.date);

  const setDate = (date: Date) => {
    dispatch(updateDate(date.toString()));
  };

  return (
    <div className={s['date-pick']}>
    <DatePicker
      customInput={<CustomInputDate />}
      locale="ru"
      placeholderText="Выберите дату"
      dateFormat="dd/MM/yyyy"
      selected={selectedDate ? new Date(selectedDate) : new Date()}
      onChange={(date: Date) => setDate(date)}
    />
</div>
  );
};

export default DateField;
