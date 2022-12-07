import {FC, forwardRef} from "react"
import s from './CustomInputDate.module.css'

interface CustomInputDateI {
  value?: string,
  onClick?: ()=>void
}

const CustomInputDate: FC<CustomInputDateI> = forwardRef(({value, onClick}, ref: React.ForwardedRef<HTMLSpanElement>) => {
  return <div className={s.date}>
    <span ref={ref} onClick={onClick} >{value ? value : 'Выберите дату'}</span>
</div>
})

export default CustomInputDate
