import { FC } from "react";
import { useNavigate } from "react-router-dom";
import s from "./Bar.module.css";
import Price from "./Price/Price";

interface BarProps {}

const Bar: FC<BarProps> = ({}) => {
  const navigate = useNavigate();

  const orderFunc = () => {
    navigate("/delivery");
  };

  return (
    <div className={s.bar}>
      <h3 className={s["product-name"]}>Xiaomi</h3>
      <div className={s.wrap}>
        <Price />
        <input
          onClick={() => orderFunc()}
          className={s.btn + " blue-btn"}
          type="button"
          value="Оформить"
        />
      </div>
    </div>
  );
};

export default Bar;
