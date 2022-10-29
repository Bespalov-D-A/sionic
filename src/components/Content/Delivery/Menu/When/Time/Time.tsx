import React, {FC} from "react";
import s from './Time.module.css'

interface TimeProps {
}

const Time: FC<TimeProps> = ({}) => {
  return <div className={s.time}>
  <span>Выберите дату</span>
  </div>;
};

export default Time;
