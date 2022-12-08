import { FC, forwardRef, useEffect } from "react";
import s from "./CustomInputDate.module.css";

interface CustomInputDateI {
  value?: string;
  onClick?: () => void;
  field: any;
}

const CustomInputDate: FC<CustomInputDateI> = forwardRef(
  ({ field, value, onClick }, ref: React.ForwardedRef<HTMLSpanElement>) => {
    return (
      <div className={s.date}>
        <span
          id="date"
          onMouseDown={(e) => field.onBlur({ ...e, type: "blur" })}
          className={s.date}
          ref={ref}
          onClick={onClick}
        >
          {value ? value : "Выберите дату"}
        </span>
      </div>
    );
  }
);

export default CustomInputDate;
