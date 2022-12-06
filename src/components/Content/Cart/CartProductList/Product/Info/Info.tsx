import React, {FC} from 'react'
import StatusBar from './StatusBar/StatusBar'
import s from './Info.module.css'

interface InfoI {
  info: string,
    name: string
}

const Info: FC<InfoI> = ({name, info}) => {
  return <div className={s.info}>
  <p>{name}</p>
  <StatusBar />
  </div>
}

export default Info
