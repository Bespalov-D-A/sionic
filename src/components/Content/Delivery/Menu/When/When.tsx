import React, {FC} from "react";
import s from './When.module.css'
import Time from "./Time/Time";
import DateBlock from "./Date/Date";

interface WhenProps {
}

const When: FC<WhenProps> = ({}) => {
  return <div className={s.when}>
    <h4 className={s.title}>Когда доставить?</h4>
    <div className={s['date-time']}>
      <DateBlock />
      <Time />
    </div>
  </div>;
};

export default When;
