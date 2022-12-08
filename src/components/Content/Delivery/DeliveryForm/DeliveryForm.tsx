import { FC } from "react";
import s from "./DeliveryForm.module.css";
import Name from "./Name/Name";
import Phone from "./Phone/Phone";
import When from "./When/When";
import Location from "./Location/Location";

interface DeliveryFormI {}

const DeliveryForm: FC<DeliveryFormI> = () => {

  return (
    <div className={s.menu}>
      <h1 className={s.title}>Доставка</h1>
      <When nameDate='date' nameTime="time" />
      <Location name={"address"} />
      <Name name="name" />
      <Phone name="phone" />
    </div>
  );
};

export default DeliveryForm;
