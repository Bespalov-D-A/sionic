export const createObjects = (
  dispatch: any,
  array: any[],
  dataLoading: any
): void => {
  const subsequence = [
    "ADD_PRODUCT",
    "ADD_PRODUCT_COVER",
    "ADD_PRODUCT_CATEGORY",
    "ADD_PRODUCT_VARIATION",
    "ADD_PRODUCT_VARIATION_PROPERTY",
    "ADD_PRODUCT_VARIATION_PROP_LIST_VALUES",
    "ADD_PRODUCT_VARIATION_PROPERTY_VALUE",
  ];

  array.forEach((item: any, index: number) => {
    item.forEach((item: any) => {
      dispatch({ type: subsequence[index], payload: item });
    });
  });

  dispatch(dataLoading());
};
