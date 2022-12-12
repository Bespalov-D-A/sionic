import { FC } from "react";
import CartBtn from "../Header/CartBtn/CartBtn";
import s from "./HeaderMobile.module.css";
import MobileMenuBtn from "./MobileMenuBtn/MobileMenuBtn";

interface HeaderMobileI {
  mobileBtn: React.MutableRefObject<HTMLDivElement>
}

const HeaderMobile: FC<HeaderMobileI> = ({mobileBtn}) => {

  return (
    <div className={s["header-mobile"]}>
      <CartBtn />
      <MobileMenuBtn mobileBtn={mobileBtn}/>
    </div>
  );
};

export default HeaderMobile;
