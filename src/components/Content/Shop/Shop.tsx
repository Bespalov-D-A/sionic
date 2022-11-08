import React, { FC } from "react";
import Top from "./Top/Top";
import s from "./Shop.module.css";
import Main from "./Main/Main";
import Categories from "./Categories/Categories";

interface ShopProps {
}

const Shop: FC<ShopProps> = ({}) => {
  return (
    <div className={s.shop}>
      <Top />
      <Categories />
      <Main />
    </div>
  );
};

export default Shop;
