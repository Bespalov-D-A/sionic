import React, {FC} from "react";
import s from './Phone.module.css'

interface PhoneProps {
}

const Phone: FC<PhoneProps> = ({}) => {
  return (
    <div className={s.phone}>
      <h4 className={s.title}>Телефон</h4>
      <div className={s["phone-input-block"]}>
        <input type="text" className={s["phone-input"]} />
      </div>
    </div>
  );

};

export default Phone;
