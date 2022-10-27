import React, {FC} from 'react'
import s from './Find.module.css'

interface FindProps {
	
}

const Find: FC<FindProps> = ({}) => {
  return <div className={s.find}>
      <input type="text" className={s.field}/>
      <button className={s.btn}/>
  </div>
}

export default Find
