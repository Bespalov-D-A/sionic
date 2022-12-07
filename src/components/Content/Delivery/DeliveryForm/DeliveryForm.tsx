import { FC } from "react";
import s from "./DeliveryForm.module.css";
import Name from "./Name/Name";
import Phone from "./Phone/Phone";
import When from "./When/When";
import Location from "./Location/Location";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { Formik } from "formik";

interface DeliveryFormI {}

const DeliveryForm: FC<DeliveryFormI> = ({}) => {
  const initValues = useAppSelector((state) => state.deliveryFormSlice);

  const validate = () => {};

  return (
    <Formik
      initialValues={{ ...initValues }}
      validate={validate}
      onSubmit={(values) => console.log(initValues)}
    >
        <div className={s.menu}>
          <h1 className={s.title}>Доставка</h1>
          <When name='time' />
          <Location name={'address'}/>
          <Name name="name"/>
          <Phone name='phone'/>
        </div>
    </Formik>
  );
};

export default DeliveryForm;
