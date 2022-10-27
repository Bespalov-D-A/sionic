import React, { FC } from "react";
import s from "./Location.module.css";

interface LocationProps {}

const Location: FC<LocationProps> = ({}) => {
  return <div className={s.location}>Александровск-Сабор сити</div>;
};

export default Location;
