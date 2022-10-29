import React, { FC } from "react";
import s from "./Data.module.css";

interface DateProps {}

const Date: FC<DateProps> = ({}) => {
  return (
    <div className={s.date}>
      <span>Выберите время</span>
    </div>
  );
};

export default Date;
