import React, {FC} from 'react'
import s from './Cover.module.css'

interface CoverProps {
  cover: string
}

const Cover: FC<CoverProps> = ({cover}) => {
  return <div className={s.cover}>
<img src={cover} alt="" className={s['cover-img']}/>
  </div>
}

export default Cover
