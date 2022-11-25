import React, { FC, useEffect } from "react";
import {
  getCategories,
  getCover,
  getProducts,
  getProductVariationProp,
  getProductVariationPropListValues,
  getProductVariationPropValue,
  getProductVariations,
} from "../../../api/api";
import { createAllModels, createObjects } from "../../../func/func";
import { useAppSelector } from "../../../store/hooks/hooks";
import { orm } from "../../../store/models/models";

interface NetWorkProps {
  children: React.ReactElement | React.ReactNode;
}

const NetWork: FC<NetWorkProps> = ({ children }) => {
  const dataIsLoad = useAppSelector((state) => state.shopSlice.dataIsLoad);

  useEffect(() => {
    const session = orm.session(orm.getEmptyState());
    let isOk: number;
    isOk = createObjects(getProducts, createAllModels, session, "Product");
    isOk = createObjects(getCover, createAllModels, session, "ProductCover");
    isOk = createObjects(getCategories, createAllModels, session, "Category");
    isOk = createObjects(
      getProductVariations,
      createAllModels,
      session,
      "ProductVariation"
    );
    isOk = createObjects(
      getProductVariationProp,
      createAllModels,
      session,
      "ProductVariationProperty"
    );
    isOk = createObjects(
      getProductVariationPropListValues,
      createAllModels,
      session,
      "ProductVariationPropListValues"
    );
    isOk = createObjects(
      getProductVariationPropValue,
      createAllModels,
      session,
      "ProductVariationPropertyValue"
    );
    setTimeout(() => {
      console.log(session.ProductVariationPropertyValue.all().toRefArray());
    }, 2000);
  }, []);

  return dataIsLoad ? <>{children}</> : <div>LOADING...</div>;
};

export default NetWork;
