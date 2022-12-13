import { useMemo } from "react";
import { orm } from "../store/models/models";
import { useAppSelector } from "./useAppSelector";

export const useGetProductsInCat = (
  page: number,
  limit: number,
  productsCount: number,
  selectedCategory: number | null
) => {
  const state = useAppSelector((state) => state);
  const session = orm.session(state.ormReducer);

  const getProducts = useMemo(() => {
    let newProducts: any = [];
    if (!selectedCategory) newProducts = session.Product.all().toRefArray();
    else
      newProducts = session.Product.filter({
        category_id: selectedCategory,
      }).toRefArray();
    return newProducts
  }, [productsCount, page]);
  return getProducts;
};
