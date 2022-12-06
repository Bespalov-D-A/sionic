import { FC, useEffect, useState } from "react";
import Price from "./Price/Price";
import s from "./ProductCard.module.css";
import Btn from "./Btn/Btn";
import axios from "axios";
import {
  IProduct,
  IProductCover,
  IProductVariation,
} from "../../../types/productTypes";
import { useLoader } from "../../../hooks/useLoader";
import { params } from "../../../types/apiTypes";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { ADD_PRODUCT_VARIATION_PACK } from "../../../store/models/ProductVariation/ProductVariation";
import { variationService } from "../../../API/variationService";
import { useAppSelector } from "../../../hooks/useAppSelector";
import Variations from "./Variations/Variations";
import Properties from "./Properties/Properties";
import { useCart } from "react-use-cart";

interface ProductCardProps {
  productCard: IProduct;
}

const ProdcutCard: FC<ProductCardProps> = ({ productCard }) => {
  const { id } = productCard;
  const [selectedVariation, setSelectedVariation] =
    useState<IProductVariation | null>(null);
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);
  const [isFetch, isLoad, error]: any = useLoader(async (params: params) => {
    const response = await variationService.getProductVariation(params);
    setSelectedVariation(response.data[0]);
    dispatch({ type: ADD_PRODUCT_VARIATION_PACK, payload: response.data });
  });
  const { addItem } = useCart();
  const  ggg  = useCart();
  const [cover, setCover] = useState<string>("");

  useEffect(() => {
    getCover();
    isFetch({
      filter: `{"product_id":${id}}`,
    });
  }, []);

  const getCover = async () => {
    let resp = await axios.get<IProductCover>(
      "https://test2.sionic.ru/api/ProductImages/" + productCard.id
    );
    setCover("https://test2.sionic.ru/" + resp.data.image_url);
  };
  const addCartFunc = () => {
    addItem(
      {
        ...productCard,
        id: String(productCard.id),
        selected_variation_id: selectedVariation!.id,
        price: selectedVariation!.price,
      }, 1
    );
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
        <Variations
          selectedVariation={selectedVariation}
          setSelectedVariation={setSelectedVariation}
          productId={id}
        />
        <p className={s.title}>{productCard.name}</p>
        <Properties selectedVariation={selectedVariation} />
      </div>
      <Price price={selectedVariation?.price} />
      <Btn addCart={addCartFunc} />
    </div>
  );
};

export default ProdcutCard;
