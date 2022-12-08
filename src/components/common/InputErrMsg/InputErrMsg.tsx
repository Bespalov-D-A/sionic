import {FC} from "react"
import s from './InputErrMsg.module.css'

interface InputErrMsgI {
  msg:string | undefined,
    touched: boolean,
    style?: any
}

const InputErrMsg: FC<InputErrMsgI> = ({style, msg, touched}) => {
  return <span style={style} className={s.error}>{msg && touched && msg}</span>
}

export default InputErrMsg
