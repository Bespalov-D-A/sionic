import React, {FC} from "react";
import s from './Menu.module.css'
import Name from "./Name/Name";
import Phone from "./Phone/Phone";
import When from "./When/When";
import Location from "./Location/Location";

interface MenuProps {
}

const Menu: FC<MenuProps> = ({}) => {
  return <div className={s.menu}>
    <h1 className={s.title}>Доставка</h1>
    <When />
    <Location />
    <Name />
    <Phone />
    
  </div>;
};

export default Menu;
