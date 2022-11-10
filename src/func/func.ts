import { Ierror, IproductCover, Ivariation } from "../types/dataShopApiTypes";

//Создание объектов ORM redux из массива, массивов с объектами
//который получаем от Promise.all
export const createObjects = (
  dispatch: any,
  array: any[],
  dataLoading: any
): void => {
  const subsequence = [
    //"ADD_PRODUCT",
 //   "ADD_PRODUCT_COVER",
    "ADD_PRODUCT_CATEGORY",
    //"ADD_PRODUCT_VARIATION",
    "ADD_PRODUCT_VARIATION_PROPERTY",
    "ADD_PRODUCT_VARIATION_PROP_LIST_VALUES",
    //"ADD_PRODUCT_VARIATION_PROPERTY_VALUE",
  ];

  array.forEach((item: any, index: number) => {
    item.forEach((item: any) => {
      dispatch({ type: subsequence[index], payload: item });
    });
  });

  dispatch(dataLoading());
};

const randomNumber = (min: number, max: number) => {
  return Math.random() * (max-min) + min
}

//Создание объектов ORM в redux из массива объектов
export const createOrmObjects = (
  dispatch: any,
  array: Ierror | any[] | undefined,
  setVariationIsLoad: any,
  refresh: any | undefined,
  dataForRefresh: string | undefined,
  type: string
) => {
  if (array && Array.isArray(array)) {
    array.forEach((item: any) => {
      dispatch({ type: type, payload: item });
    });
    setVariationIsLoad(true);
    if (refresh && dataForRefresh) refresh(array[0][dataForRefresh]);
    if (refresh && dataForRefresh === 'random') refresh(randomNumber(1, 99))
  }
};


//Сортировка массива объектов
export const compareNumeric = (
  a: { [key: string]: any },
  b: { [key: string]: any },
  property: string
): number => {
  if (a[property] > b[property]) return 1;
  if (a[property] == b[property]) return 0;
  if (a[property] < b[property]) return -1;
  else return 0;
};

//Получаем значения свойства из списка
const changeValue = (session: any, id: number) => {
  let refArr = session.ProductVariationPropListValues.all().toRefArray();
  let target = refArr.find((item: any) => item.id === id);
  return target.title;
};

//Функция добавление в объект свойства вариации, значения этого свойства
export const selectVariationPropValue = (
  session: any,
  propValue: readonly any[],
  property: any
) => {
  if (propValue.length === 0 || !propValue)
    return { ...property, value: "error" };

  switch (property.type) {
    case 0:
      return { ...property, value: propValue[0].value_string };
    case 1:
      return { ...property, value: propValue[0].value_int };
    case 2:
      return { ...property, value: propValue[0].value_float };
    case 3:
      return {
        ...property,
        value: changeValue(
          session,
          propValue[0].product_variation_property_list_value_id
        ),
      };
    default:
      return;
  }
};

//Функция проверки, получались ли уже данные с сервера
export const checkData = (
  array: number[], // idшники ранее выбранных вариаций
  selected: { [key: string]: any } //Выбранная вариация
) => {
  return array.findIndex(
    (item: number) => item === selected.id
  );
};

    export const setProductCover = (
      dispatch: any,
      obj: IproductCover,
      setFunc: any
    ) => {
      dispatch({ type: "ADD_PRODUCT_COVER", payload: obj });
      setFunc(obj);
    };

//Функция нажатия на стрелки при переключении вариации
export  const selectVariationFunc = (
    value: string,
    list: any[],
    id: number,
    callback: any,
    step:()=>void
  ) => {
    let ind = list.findIndex((item) => item.id === id);
    switch (value) {
      case "next":
        if (list[list.length - 1].id === id) break;
        callback(list[ind + 1]);
        step()
        break;
      case "previous":
        if (list[0].id === id) break;
        callback(list[ind - 1]);
        step()
        break;
      default:
        break;
    }
  };


