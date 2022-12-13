import { FC, forwardRef, useEffect } from "react";
import { format } from "date-fns";
import s from "./CustomInputDate.module.css";
import { DateAndTimeNames } from "../../../../../../../types/types";
import {useAppSelector} from "../../../../../../../hooks/useAppSelector";

interface CustomInputDateI {
  value?: string;
  onClick?: () => void;
  field: any;
  readonly nameInput: DateAndTimeNames;
  placeholder: string;
}

const CustomInputDate: FC<CustomInputDateI> = forwardRef(
  (props, ref: React.ForwardedRef<HTMLSpanElement>) => {
    const { field, value, onClick, placeholder, nameInput } = props;

      const dateValue = useAppSelector(state => state.deliveryFormSlice.date)
    const getValue = (name: DateAndTimeNames) => {
      return format(
        new Date(field.value),
        name === "time" ? "HH:mm" : "dd.MM.yyyy"
      );
    };


    return (
      <div className={s.date}>
        <span
          id={field.name}
          onMouseUp={(e)=>field.onBlur({ ...e, type: "blur" })}
          className={s.date}
          ref={ref}
          onClick={!dateValue && nameInput === 'time' ? ()=>{} : onClick}
        >
          {field.value ? getValue(nameInput) : placeholder}
        </span>
      </div>
    );
  }
);

export default CustomInputDate;
