import React, { FC } from "react";
import s from "./Count.module.css";

interface CountProps {}

const Count: FC<CountProps> = ({}) => {
  return (
    <div className={s["count-block"]}>
      <input type="button" className={s.minus + ' ' + s.btn} />
      <span className={s.count}>25</span>
      <input type="button" className={s.plus + ' ' + s.btn} />
    </div>
  );
};

export default Count;
