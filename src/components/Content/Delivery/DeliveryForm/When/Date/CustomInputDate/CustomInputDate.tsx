import { FC, forwardRef, useEffect } from "react";
import s from "./CustomInputDate.module.css";

interface CustomInputDateI {
  value?: string;
  onClick?: () => void;
  field: any;
  name: string,
  placeholder:string
}

const CustomInputDate: FC<CustomInputDateI> = forwardRef(
  ({ field, value, onClick, placeholder, name }, ref: React.ForwardedRef<HTMLSpanElement>) => {
    return (
      <div className={s.date}>
        <span
          id={field.name}
          onMouseDown={(e) => field.onBlur({ ...e, type: "blur" })}
          className={s.date}
          ref={ref}
          onClick={onClick}
        >
          {value ? value : placeholder}
        </span>
      </div>
    );
  }
);

export default CustomInputDate;
