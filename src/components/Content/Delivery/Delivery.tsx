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
import { IDeliveryFormValues, IProductInCart } from "../../../types/orderTypes";
import { orderUtil } from "../../../utilites/orderUtil";
import { clearForm } from "../../../store/slices/deliveryFormSlice";

interface DeliveryProps {}

const Delivery: FC<DeliveryProps> = ({}) => {
  const initValues = useAppSelector((state) => state.deliveryFormSlice);
  const dispatch = useAppDispatch();
  const { items, emptyCart }: any = useCart();

  const createOrder = (values: IDeliveryFormValues, actions: any) => {
    emptyCart();
    actions.resetForm({
      values: { name: "", phone: "", address: "", date: null, time: null },
    });
    dispatch(updateOrders(orderUtil(items, values)));
    dispatch(clearForm());
  };

  return (
    <Formik
      initialValues={{ ...initValues }}
      //@ts-ignore
      validate={validateDeliveryForm}
      onSubmit={(values, actions) => createOrder(values, actions)}
    >
      {({ handleSubmit, errors, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <div className={s.delivery}>
            <DeliveryForm />
            <OrderData errors={errors} isSubmitting={isSubmitting} />
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Delivery;
