import { FC } from "react";
import s from "./HeaderMobile.module.css";
import MobileMenuBtn from "./MobileMenuBtn/MobileMenuBtn";

interface HeaderMobileI {
  mobileBtn: React.MutableRefObject<HTMLDivElement>
}

const HeaderMobile: FC<HeaderMobileI> = ({mobileBtn}) => {

  return (
    <div className={s["header-mobile"]}>
      <MobileMenuBtn mobileBtn={mobileBtn}/>
    </div>
  );
};

export default HeaderMobile;
