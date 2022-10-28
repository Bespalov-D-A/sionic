import React, {FC} from 'react'
import CartBtn from './CartBtn/CartBtn'
import Find from './Find/Find'
import Location from './Location/Location'
import ProfilePhoto from './ProfilePhoto/ProfilePhoto'
import s from './Header.module.css'
import Logo from '../Global/Logo/Logo'

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

