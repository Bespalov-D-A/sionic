import  { FC } from "react";
import Count from "./Count/Count";
import Cover from "./Cover/Cover";
import Del from "./Del/Del";
import Info from "./Info/Info";
import Price from "./Price/Price";
import s from "./Product.module.css";

interface ProductProps {
  product: any;
}

const Product: FC<ProductProps> = ({ product }) => {
  const { quantity, id, description, price, name, cover } = product;

  return (
    <div className={s.product}>
      <div className={s["cover-info-wrap"]}>
        <Cover cover={cover} />
        <Info info={description} name={name} />
      </div>
      <div className={s['count-price-del-wrap']}>
 <Count productId={id} quantity={quantity} />
      <Price price={price} />
      <Del productId={id} />

      </div>
         </div>
  );
};

export default Product;
