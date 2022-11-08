import React, { FC, useEffect, useState } from "react";
import Price from "./Price/Price";
import s from "./ProductCard.module.css";
import Btn from "./Btn/Btn";
import { orm } from "../../../store/models/models";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/hooks";
import {
  Iproduct,
  IproductCover,
  Ivariation,
} from "../../../types/dataShopApiTypes";
import { getCover, getProductVariations } from "../../../api/api";
import {
  compareNumeric,
  createOrmObjects,
  setProductCover,
} from "../../../func/func";
import ProductVariations from "./ProductVariations/ProductVariations";
import VariationProp from "./VariationProp/VariationProp";

interface ProductCardProps {
  productCard: Iproduct;
}

const ProdcutCard: FC<ProductCardProps> = ({ productCard }) => {
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const [selectedVariation, setSelectedVariation] = useState<Ivariation | null>(
    null
  );
  const [variationIsLoad, setVariationIsLoad] = useState<boolean>(false);
  const [variationsList, setVariationsList] = useState<any[]>([]);
  const [cover, setCover] = useState<IproductCover | null>(null);
  const baseUrl = "https://test2.sionic.ru";

  useEffect(() => {
    if (!variationIsLoad) {
      getProductVariations(
        '?filter={"product_id":' + productCard.id + "}"
      ).then((res) =>
        createOrmObjects(
          dispatch,
          res,
          setVariationIsLoad,
          undefined,
          "ADD_PRODUCT_VARIATION"
        )
      );
    }

    getCover(`${productCard.id}`).then((res: any) =>
      setProductCover(dispatch, res, setCover)
    );
  }, []);

  useEffect(() => {
    if (variationIsLoad) {
      const session = orm.session(state.ormReducer);
      let fff = session.ProductVariation.all()
        .filter((item: any) => item.product_id === productCard.id)
        .toModelArray()
        .map((item: any) => {
          return item.ref;
        });
      fff.sort((a: any, b: any) => compareNumeric(a, b, "price"));
      setSelectedVariation(fff[0]);
      setVariationsList(fff);
      setVariationIsLoad(false);
    }
  }, [variationIsLoad]);

  return (
    <div className={s["product-card"]}>
      <div className={s.header}>
          <div className={s.img}>
        {!cover ? (
          ""
        ) : (
            <img src={baseUrl + cover.image_url} alt="" className={s.cover} />
        )}
          </div>
      </div>
      <div
        className={
          s.variations + " " + (variationsList.length === 0 ? s.loading : '')
        }
      >
        {variationsList.length > 0 ? (
          <ProductVariations
            productId={productCard.id}
            selectedVariation={selectedVariation}
            setSelectedVariation={setSelectedVariation}
            variationsList={variationsList}
          />
        ) : (
          ""
        )}
      </div>
      <div className={s["title-block"]}>
        <p className={s.title}>{productCard.name}</p>
      </div>
      <VariationProp selectedVariation={selectedVariation} />
      <Price selectedVariation={selectedVariation} />
      <Btn />
    </div>
  );
};

export default ProdcutCard;
