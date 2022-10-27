import React, {FC} from 'react'
import s from './Logo.module.css'

interface LogoProps {
	
}

const Logo: FC<LogoProps> = ({}) => {
return <h1 className={s.logo}>React</h1>
}

export default Logo
