import React, { FC } from "react";
import s from "./Apps.module.css";

interface AppsProps {}

const Apps: FC<AppsProps> = ({}) => {
  return (
    <div>
      <p className={s.title}>Устанавливайте приложение</p>
      <ul className={s["apps-menu"]}>
        <li className={s["apps-menu__item"]}>
          <a href="#" className={s.link + ' ' + s['link--android']}></a>
        </li>
        <li className={s["apps-menu__item"]}>
          <a href="#" className={s.link + ' ' + s['link--apple']}></a>
        </li>
      </ul>
    </div>
  );
};

export default Apps;
