import { FC } from "react";
import OrderData from "./OrderData/OrderData";
import s from "./Delivery.module.css";
import DeliveryForm from "./DeliveryForm/DeliveryForm";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { updateOrders } from "../../../store/slices/orderHistorySlice";
import { useCart } from "react-use-cart";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { Formik } from "formik";
import { validateDeliveryForm } from "../../../validators/deliveryFormValidate";

interface DeliveryProps {}

const Delivery: FC<DeliveryProps> = ({}) => {
  const initValues = useAppSelector((state) => state.deliveryFormSlice);
  const dispatch = useAppDispatch();
  const { items } = useCart();
  const createOrder = () => {
    dispatch(updateOrders(items));
  };

  return (
    <Formik
      initialValues={{ ...initValues }}
      //@ts-ignore
      validate={validateDeliveryForm}
      onSubmit={(values, errors) => console.log("")}
    >
      {({ handleSubmit, errors }) => (
        <form onSubmit={handleSubmit}>
          <div className={s.delivery}>
            <DeliveryForm />
            <OrderData errors={errors} createOrder={createOrder} />
          </div>
          <button onClick={() => console.log(errors)}>sdsdd</button>
        </form>
      )}
    </Formik>
  );
};

export default Delivery;
