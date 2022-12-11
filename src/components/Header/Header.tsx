import  {FC} from 'react'
import CartBtn from './CartBtn/CartBtn'
import Find from './Find/Find'
import Location from './Location/Location'
import ProfilePhoto from './ProfilePhoto/ProfilePhoto'
import s from './Header.module.css'
import Logo from '../common/Logo/Logo'
import {useMediaQuery} from 'react-responsive'

interface HeaderProps {
}

const Header: FC<HeaderProps> = ({}) => {
  const isMaxWidth = useMediaQuery({
    query: "(max-width: 600px)",
  });


  return <div className={s.header + ' header'}>
    {isMaxWidth || <Logo />}
    {isMaxWidth  ||  <Location /> }
    <Find />
    <CartBtn />
    {isMaxWidth || <ProfilePhoto />}
  </div>
}

export default Header

