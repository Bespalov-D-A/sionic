export const createAllModels = (arr: [], callback: any): void => {
  arr.forEach((item: object, index: number) => callback(item))
}
