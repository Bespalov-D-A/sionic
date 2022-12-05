import  { FC, useEffect, } from "react";
import {productService} from "../../../../API/productService";
import s from "./Main.module.css";

interface MainProps {}

const Main: FC<MainProps> = ({}) => {

  const params = {
    filter: `{"category_id":${3}}`
  }

  const getProduct = async () => {
    const response = await productService.getProducts(params)
  }

  useEffect(()=> {
    getProduct()
  }, [])

  return (
    <div className={s.main}>
{/*      <List*/}
        {/*items={products}*/}
        {/*renderItem={(productCard: IproductCard) => (*/}
          {/*<ProductCard productCard={productCard} key={productCard.id} />*/}
        {/*)}*/}
      {/*/>*/}
    </div>
  );
};

export default Main;
