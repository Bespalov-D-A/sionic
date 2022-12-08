import {IDeliveryFormError} from "../validators/deliveryFormValidate"

export interface ITouchedDeliveryForm {
  time?: boolean,
  date?: boolean,
  name?: boolean,
  address?: boolean,
  phone?: boolean,
}

export const equalsFormErr = (errors: IDeliveryFormError, touched: ITouchedDeliveryForm) => {
  let bool = false
/*  for(let key in errors) {*/
    /*if(Object.keys(touched).includes(key) && errors[key]) bool = true*/
  /*}*/
  return bool
}
