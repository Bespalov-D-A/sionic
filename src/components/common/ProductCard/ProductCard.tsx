import React, { FC, useEffect, useState } from "react";
import Price from "./Price/Price";
import s from "./ProductCard.module.css";
import Btn from "./Btn/Btn";
import axios from "axios";
import { IProduct, IProductCover } from "../../../types/productTypes";
import { useLoader } from "../../../hooks/useLoader";
import { params } from "../../../types/apiTypes";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { ADD_PRODUCT_VARIATION_PACK } from "../../../store/models/ProductVariation/ProductVariation";
import { variationService } from "../../../API/variationService";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {useVariation} from "../../../hooks/useVariation";
import Variations from "./Variations/Variations";

interface ProductCardProps {
  productCard: IProduct;
}

const ProdcutCard: FC<ProductCardProps> = ({ productCard }) => {
  const {id} = productCard
  const dispatch = useAppDispatch();
  const state = useAppSelector(state => state)
  const [isFetch, isLoad, error]: any = useLoader(async (params: params) => {
    const response = await variationService.getProductVariation(params);
    dispatch({ type: ADD_PRODUCT_VARIATION_PACK, payload: response.data });
  });

  const [cover, setCover] = useState<string>("");

  useEffect(() => {
    getCover()
    isFetch({
      filter: `{"product_id":${id}}`
    });
  }, []);

  const getCover = async () => {
    let resp = await axios.get<IProductCover>(
      "https://test2.sionic.ru/api/ProductImages/" + productCard.id
    );
    setCover("https://test2.sionic.ru/" + resp.data.image_url);
  };

  return (
    <div className={s["product-card"]}>
      <div className={s.header}>
        {cover.length == 0 ? (
          "Loading..."
        ) : (
          <>
            <img src={cover} alt="" className={s.cover} />
          </>
        )}
      </div>
      <div className={s["title-block"]}>

            <Variations productId={id}/>
        <p className={s.title}>{productCard.name}</p>
      </div>
      <Price />
      <Btn />
    </div>
  );
};

export default ProdcutCard;
