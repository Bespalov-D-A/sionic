import React, {FC} from 'react'
import StatusBar from './StatusBar/StatusBar'
import s from './Info.module.css'

interface InfoProps {}

const Info: FC<InfoProps> = ({}) => {
  return <div className={s.info}>
  <p>Смартфон Xiaomi Redmi Note 8 Pro 6/128GB, белый</p>
  <StatusBar />
  </div>
}

export default Info
