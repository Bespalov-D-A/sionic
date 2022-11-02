export const createAllModels = (
  arr: any,
  callback: any,
  model: string
): void => {
  arr.forEach((item: object, index: number) => {
    callback[model].create(item);
  });
};

export const createObjects = (
  request: any,
  createModel: any,
  callback: any,
  model: string
) => {
  try {
    request().then((res: any) => createModel(res, callback, model));
    return 1;
  } catch (e) {
    console.log(e);
    return 0
  }
};
