import { IDeliveryFormValues, IProductInCart } from "../types/orderTypes";
import {numFormat} from "./formatNumbers";

export const orderUtil = (
  products: IProductInCart[],
  values: IDeliveryFormValues,
  totalItems: number,
  cartTotal: number
) => {
  const id = numFormat( Math.floor(Math.random() * 999999), '-')
  const date = new Date().toLocaleDateString();
  const paidFunc = () => {
    if (Math.floor(Math.random() * 10) > 5) return true;
    else return false;
  };
  return {
    delivery: values,
    products,
    orderId: id,
    date,
    paid: paidFunc(),
    productCount: totalItems,
    cartTotal
  }
};
