import React, { FC } from "react";
import s from "./Info.module.css";

interface InfoProps {}

const Info: FC<InfoProps> = ({}) => {
  return (
    <div className={s.info}>
      <ul className={s.menu}>
        <li className={s["menu__item"]}>
          <a href="#" className={s["menu__link"]}>
            © Sionic
          </a>
        </li>
        <li className={s["menu__item"]}>
          <a href="#" className={s["menu__link"]}>
            Правовая информация
          </a>
        </li>
        <li className={s["menu__item"]}>
          <a href="#" className={s["menu__link"]}>
            Политика конфиденциальности
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Info;
