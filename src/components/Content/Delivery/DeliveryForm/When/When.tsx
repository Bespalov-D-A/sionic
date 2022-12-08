import { FC } from "react";
import s from "./When.module.css";
import Time from "./Time/Time";
import DateField from "./Date/Date";

interface WhenProps {
  nameTime: string,
  nameDate: string
}

const When: FC<WhenProps> = ({nameTime, nameDate}) => {
  return (
    <div className={s.when}>
      <h4 className={s.title}>Когда доставить?</h4>
      <div className={s["date-time"]}>
        <DateField name={nameDate}/>
        <Time name={nameTime} />
      </div>
    </div>
  );
};

export default When;
