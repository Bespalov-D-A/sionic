import { FC, useEffect, useState } from "react";
import ProductCardPresent from './ProuductCartPresent'
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
import {useCart} from "react-use-cart";
import {IProductInCart} from "../../../types/orderTypes";

interface ProductCardProps {
  productCard: IProduct;
}

const ProdcutCard: FC<ProductCardProps> = ({ productCard }) => {
  const { id } = productCard;
  const [selectedVariation, setSelectedVariation] =
    useState<IProductVariation | null>(null);
  const dispatch = useAppDispatch();
  const [isFetch, isLoad, error]: any = useLoader(async (params: params) => {
    const response = await variationService.getProductVariation(params);
    setSelectedVariation(response.data[0]);
    dispatch({ type: ADD_PRODUCT_VARIATION_PACK, payload: response.data });
  });
  const { getItem, addItem } = useCart();
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
    const prodId = productCard.id + "#cat:" + selectedVariation!.id;
    const newProduct = getItem(prodId);
    const productInCart: IProductInCart = {
      ...productCard,
      id: prodId,
      original_product_id: productCard.id,
      selected_variation_id: selectedVariation!.id,
      price: selectedVariation!.price,
      cover,
    };
    if (newProduct) {
      alert("Уже в корзине");
    } else addItem(productInCart);
  };

  return (
    !error 
    ? <ProductCardPresent
      cover={cover}
      selectedVariation={selectedVariation}
      setSelectedVariation={setSelectedVariation}
      id={id}
      addCartFunc={addCartFunc}
      productCard={productCard}
    />
    : <>Ошибка загрузки данных товарa</>
  );
};

export default ProdcutCard;
