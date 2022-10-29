import React, { FC } from "react";
import s from "./Name.module.css";

interface NameProps {}

const Name: FC<NameProps> = ({}) => {
  return (
    <div className={s.name}>
      <h4 className={s.title}>Имя</h4>
      <div className={s["name-input-block"]}>
        <input type="text" className={s["name-input"]} />
      </div>
    </div>
  );
};

export default Name;
