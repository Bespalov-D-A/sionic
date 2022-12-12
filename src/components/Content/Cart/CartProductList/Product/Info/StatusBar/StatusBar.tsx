import { FC } from "react";
import s from "./StatusBar.module.css";

interface StatusBarProps {}

const StatusBar: FC<StatusBarProps> = ({}) => {
  return (
    <div className={s["status-bar"]}>
      <div>
 <span className={s.count}>120 шт</span>
      <span className={s.time}>за 12:48:35</span>

      </div>
           <p className={s.bought}>
        Куплено:
        <span className={s["bought-count"]}>150шт.</span>
      </p>
    </div>
  );
};

export default StatusBar;
