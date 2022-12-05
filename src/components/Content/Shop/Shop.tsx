import { FC, useEffect } from "react";
import Top from "./Top/Top";
import s from "./Shop.module.css";
import Main from "./Main/Main";
import Categories from "./Categories/Categories";
import { useLoader } from "../../../hooks/useLoader";
import { params } from "../../../types/apiTypes";
import { variationService } from "../../../API/variationService";
import { ADD_PRODUCT_VARIATION_PROPERTY } from "../../../store/models/VariationProperty/VariationProperty";
import { ADD_PRODUCT_VARIATION_PROP_LIST_VALUES } from "../../../store/models/VariationPropertyListValues/VariationPropertyListValues";
import {useAppDispatch} from "../../../hooks/useAppDispatch";

interface ShopProps {}

const Shop: FC<ShopProps> = ({}) => {
  const dispatch = useAppDispatch()
  const [isFetch, isLoad, error]: any = useLoader(async (params: params) => {
    //@ts-ignore
    Promise.all([
      variationService.getProductVariationProperties(),
      variationService.getProductVariationPropertyListValues(),
    ]).then((result) => {
      dispatch({
        type: ADD_PRODUCT_VARIATION_PROPERTY,
        payload: result[0].data,
      });
      dispatch({
        type: ADD_PRODUCT_VARIATION_PROP_LIST_VALUES,
        payload: result[1].data,
      });
    });
  });

  useEffect(()=> {
    isFetch()
  }, [])

  return (
    <div className={s.shop}>
      <Top />
      <Categories />
      {isLoad ? 'LOADING' : <Main />}
    </div>
  );
};

export default Shop;

