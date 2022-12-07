import { FC } from "react";
import s from "./When.module.css";
import Time from "./Time/Time";
import DateField from "./Date/Date";

interface WhenProps {
  name: string
}

const When: FC<WhenProps> = ({name}) => {
  return (
    <div className={s.when}>
      <h4 className={s.title}>Когда доставить?</h4>
      <div className={s["date-time"]}>
        <DateField />
        <Time name={name} />
      </div>
    </div>
  );
};

export default When;
