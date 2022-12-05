import { useMemo } from "react";
import { orm } from "../store/models/models";
import { useAppSelector } from "./useAppSelector";

export const useGetPropertyValue = (
  propId: number,
  selectedVariation: number | null
) => {
  const state = useAppSelector((state) => state);
  const getValue = useMemo(() => {
    const session = orm.session(state.ormReducer);
    if(selectedVariation)
      return session.ProductVariationPropertyValue.filter({product_variation_id: selectedVariation}).filter({product_variation_property_id: propId}).first()?.ref
    else return null
  }, [selectedVariation, state]);
  return getValue;
};
