import { IDeliveryFormValues, IProductInCart } from "../types/orderTypes";
import {numFormat} from "./formatNumbers";

export const orderUtil = (
  products: IProductInCart[],
  values: IDeliveryFormValues
) => {
  const id = numFormat( Math.floor(Math.random() * 999999), '-')
  const date = new Date().toLocaleDateString();
  const paidFunc = () => {
    if (Math.floor(Math.random() * 10) > 5) return true;
    else return false;
  };
  return products.map((item: IProductInCart) => ({
    product: item,
    delivery: values,
    orderId: id,
    date,
    paid: paidFunc(),
  }));
};
