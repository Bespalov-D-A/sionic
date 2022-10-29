import React, {FC} from 'react'
import s from './Cover.module.css'

interface CoverProps {}

const Cover: FC<CoverProps> = ({}) => {
  return <div className={s.cover}>
<img src="#" alt="" className={s['cover-img']}/>
  </div>
}

export default Cover
