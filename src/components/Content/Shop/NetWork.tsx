import React, { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getCategories,
  getCover,
  getProducts,
  getProductVariationProp,
  getProductVariationPropListValues,
  getProductVariationPropValue,
  getProductVariations,
} from "../../../api/api";
import {  createObjects } from "../../../func/func";
import {  useAppSelector } from "../../../store/hooks/hooks";
import { dataLoading } from "../../../store/reducers/shop";

interface NetWorkProps {
  children: React.ReactElement | React.ReactNode;
}

const NetWork: FC<NetWorkProps> = ({ children }) => {
  const dispatch = useDispatch();
  const dataIsLoad = useAppSelector((state) => state.shopSlice.dataIsLoad);

  useEffect(() => {
    Promise.all([
      //getProducts('?range=[0,15]'),
      //getCover(),
      getCategories(),
      getProductVariationProp(),
      getProductVariationPropListValues(),
      //getProductVariationPropValue(),
    ]).then((result: any[]) => createObjects(dispatch, result, dataLoading));
  }, []);

  return dataIsLoad ? <>{children}</> : <div>LOADING...</div>;
};

export default NetWork;
