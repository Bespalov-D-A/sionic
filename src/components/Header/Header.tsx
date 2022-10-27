import React, {FC} from 'react'
import CartBtn from './CartBtn/CartBtn'
import Find from './Find/Find'
import Logo from './Logo/Logo'
import Location from './Location/Location'
import ProfilePhoto from './ProfilePhoto/ProfilePhoto'
import s from './Header.module.css'

interface HeaderProps {
}

const Header: FC<HeaderProps> = ({}) => {
  return <div className={s.header}>
    <Logo />
    <Location />
    <Find />
    <CartBtn />
    <ProfilePhoto />
  </div>
}

export default Header

