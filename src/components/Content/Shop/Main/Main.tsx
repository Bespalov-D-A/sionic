import React, { FC, useEffect, useState } from "react";
import { getProducts } from "../../../../api/api";
import { checkData, createOrmObjects } from "../../../../func/func";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks/hooks";
import { orm } from "../../../../store/models/models";
import {setBeforeSelectedCat} from "../../../../store/reducers/shop";
import { Iproduct } from "../../../../types/dataShopApiTypes";
import { IproductCard, productsType } from "../../../../types/types";
import List from "../../../Global/List";
import ProductCard from "../../../Global/ProductCard/ProductCard";
import s from "./Main.module.css";

interface MainProps {}

const Main: FC<MainProps> = ({}) => {
  const [products, setProducts] = useState<IproductCard[] | null>(null);
  const [productsIsLoad, setProductsIsLoad] = useState<boolean>(false);
  const [data, setData] = useState<number | null>(null);
  const state = useAppSelector((state: any) => state);
  const dispatch = useAppDispatch();
  const session = orm.session(state.ormReducer);
  const beforeSelectedCat = useAppSelector((state:any)=> state.shopSlice.beforeSelectedCat)
  const selectCat = useAppSelector(
    (state: any) => state.shopSlice.selectedCategory
  );

  const setProductsFunc = (res: IproductCard[] | undefined) => {
    if (!res) return;
    createOrmObjects(
      dispatch,
      res,
      setProductsIsLoad,
      setData,
      "category_id",
      "ADD_PRODUCT"
    );
  };

  useEffect(() => {
    getProducts("?range=[0,15]").then((res) => setProductsFunc(res));
  }, []);

  useEffect(() => {
    if (productsIsLoad) {
      let productArray = session.Product.all()
        .filter((product: any) =>
          !selectCat ? product : product.category_id === selectCat
        )
        .toModelArray()
        .map((item) => {
          return item.ref;
        });
      setProducts(productArray);
    }
  }, [productsIsLoad, data]);

  useEffect(() => {
    if (productsIsLoad) {
      if (checkData(beforeSelectedCat, { id: selectCat }) === -1) {
        const filter = `filter={"category_id": ${selectCat}}&`;
        const parameters = selectCat ? filter : "";
        getProducts(`?${parameters}range=[0,15]`).then((res) =>
          setProductsFunc(res)
        );
      } else setData(selectCat)
    }
  }, [selectCat]);

  return (
    <div className={s.main}>
      {products ? (
        <List
          items={products}
          renderItem={(productCard: Iproduct) => (
            <ProductCard productCard={productCard} key={productCard.id} />
          )}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Main;
