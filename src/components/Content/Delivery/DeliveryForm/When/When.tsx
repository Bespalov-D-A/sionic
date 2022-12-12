import { FC } from "react";
import s from "./When.module.css";
import TimeField from "./Time/Time";
import DateField from "./Date/Date";
import { DateAndTimeNames } from "../../../../../types/types";

interface WhenProps {
  nameTime: DateAndTimeNames;
  nameDate: DateAndTimeNames;
}

const When: FC<WhenProps> = ({ nameTime, nameDate }) => {
  return (
    <div className={s.when}>
      <h4 className={s.title}>Когда доставить?</h4>
      <div className={s["date-time"]}>
        <DateField name={nameDate} />
        <TimeField name={nameTime} />
      </div>
    </div>
  );
};

export default When;
