import {IDeliveryFormValues, IProductInCart} from "../types/orderTypes";

export const orderUtil = (products:IProductInCart[], values:IDeliveryFormValues) => {
  return products.map((item:IProductInCart) => ({product: item, delivery: values}))
}
