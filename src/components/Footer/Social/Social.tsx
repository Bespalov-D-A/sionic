import React, {FC} from 'react'
import s from './Social.module.css'

interface SocialProps {

}

const Social: FC<SocialProps> = ({}) => {
  return <div className={s.social}>
  <p className={s.title}>Присоединяйтесь к нам</p>
  <ul className={s['social-menu']}>
    <li className={s['social-menu__item']}><a href="#" className={s.link + ' ' + s['link-fb']}></a></li>
    <li className={s['social-menu__item']}><a href="#" className={s.link + ' ' + s['link-vk']}></a></li>
    <li className={s['social-menu__item']}><a href="#" className={s.link + ' ' + s['link-inst']}></a></li>
  </ul>
  </div>
}

export default Social
