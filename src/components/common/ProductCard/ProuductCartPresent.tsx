import { FC, SetStateAction } from "react";
import { IProduct, IProductVariation } from "../../../types/productTypes";
import { threeDots } from "../../../utilites/formatStrings";
import Preloader from "../Preloader/Preloader";
import Btn from "./Btn/Btn";
import Price from "./Price/Price";
import Properties from "./Properties/Properties";
import Variations from "./Variations/Variations";
import s from "./ProductCard.module.css";

interface ProductCardPresentI {
  cover: string;
  selectedVariation: IProductVariation | null;
  setSelectedVariation: React.Dispatch<
    SetStateAction<IProductVariation | null>
  >;
  id: number;
  addCartFunc: () => void;
  productCard: IProduct;
}

const ProductCardPresent: FC<ProductCardPresentI> = ({
  cover,
  selectedVariation,
  setSelectedVariation,
  id,
  addCartFunc,
  productCard,
}) => {
  return (
    <div className={s["product-card"]}>
      <div className={s.header}>
        {cover.length == 0 ? (
          <Preloader />
        ) : (
          <img src={cover} alt="" className={s.cover} />
        )}
      </div>
      <div className={s["title-block"]}>
        <Variations
          selectedVariation={selectedVariation}
          setSelectedVariation={setSelectedVariation}
          productId={id}
        />
        <p className={s.title}>{threeDots(productCard.name, 35)}</p>
        <Properties selectedVariation={selectedVariation} />
      </div>
      <Price price={selectedVariation?.price} />
      <Btn
        isDisabled={selectedVariation ? false : true}
        addCart={addCartFunc}
      />
    </div>
  );
};

export default ProductCardPresent;
