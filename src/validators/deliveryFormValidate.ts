export interface IDeliveryFormError {
  time?: string,
  date?: string,
  name?: string,
  address?: string,
  phone?: string,
}

export const validateDeliveryForm = (values:any, props:any) => {
  let errors:IDeliveryFormError = {}
  const {time, date, name, address, phone } = values
  if(!time) errors.time = 'Выберите время'
  if(!date) errors.date = 'Выберите дату'
  if(!name) errors.name = 'Введите имя'
  if(!address) errors.address = 'Введите адрес'
  if(!phone) errors.phone = 'Введите телефон'
  return errors 
}
