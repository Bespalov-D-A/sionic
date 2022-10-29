import React, {FC} from "react";
import Address from "./Address/Address";
import s from './Location.module.css'

interface LocationProps {
}

const Location: FC<LocationProps> = ({}) => {
  return <div className={s.location}>
    <h4 className={s.title}>Куда доставить?</h4>
    <Address />
  </div>;
};

export default Location;
