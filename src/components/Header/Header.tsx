import { FC, useEffect, useRef } from "react";
import CartBtn from "./CartBtn/CartBtn";
import Find from "./Find/Find";
import Location from "./Location/Location";
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";
import Logo from "../common/Logo/Logo";
import s from './Header.module.css'
import {useAppSelector} from "../../hooks/useAppSelector";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {closeMobileMenu, setMenuIsOpen} from "../../store/slices/commonSlice";
import {handlerClickOutside} from "../../utilites/clickHandlerOutsideElement";

interface HeaderProps {
  mobileBtn: React.MutableRefObject<HTMLDivElement>
}

const Header: FC<HeaderProps> = ({mobileBtn}) => {
  const menuIsOpen = useAppSelector(state => state.commonSlice.menuIsOpen)
  const dispatch = useAppDispatch()
  const headerRef = useRef() as React.MutableRefObject<HTMLDivElement>

  const closeMenu = () => {
    dispatch(closeMobileMenu()) 
  }

  const unFocus = (e: any) => {
    handlerClickOutside(e, [headerRef, mobileBtn], closeMenu )
  }

  useEffect(()=> {
    document.addEventListener('mousedown', unFocus)
    return () => document.removeEventListener('mousedown', unFocus)
  }, [])

  return (
    <div ref={headerRef} className={s.header + ' ' + (menuIsOpen ? s.open : '')}>
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
