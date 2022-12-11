import { FC } from "react";
import CartBtn from "./CartBtn/CartBtn";
import Find from "./Find/Find";
import Location from "./Location/Location";
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";
import s from "./Header.module.css";
import Logo from "../common/Logo/Logo";
import { useMediaQuery } from "react-responsive";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const isMaxWidth = useMediaQuery({
    query: "(max-width: 600px)",
  });

  //<MobileMenuBtn />

  return (
    <div className={s.header}>
      <Logo />

      <div className={s["header__wrap"]}>
        <Location />
        <Find />
        <div className={s.wrap}>
          <CartBtn />
        </div>
        <ProfilePhoto />
      </div>
    </div>
  );
};

export default Header;
