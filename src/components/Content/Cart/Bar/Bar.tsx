import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import {useCart} from "react-use-cart";
import InputErrMsg from "../../../common/InputErrMsg/InputErrMsg";
import s from "./Bar.module.css";
import Price from "./Price/Price";

interface BarProps {}

const Bar: FC<BarProps> = ({}) => {
  const navigate = useNavigate();
  const {items} = useCart() 
  const [errMsg, setErrMsg] = useState<string>('')

  const orderFunc = () => {
    if(!items.length) {
setErrMsg('Корзина пуста')
return
    }
    navigate("/delivery");
  };

  return (
    <div className={s.bar}>
      <h3 className={s["product-name"]}>Xiaomi</h3>
      <div className={s.wrap}>
        <Price />
        <div
          onClick={() => orderFunc()}
          className={s.btn + " blue-btn"}
        >Оформить
<InputErrMsg touched={true} style={{left: 69, top: 46, background: 'transparent'}} msg={errMsg} />

      </div>
              </div>
    </div>
  );
};

export default Bar;
