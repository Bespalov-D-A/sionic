import React, { FC } from "react";
import Top from "./Top/Top";
import s from "./Shop.module.css";
import Tags from "./Tags/Tags";
import Main from "./Main/Main";

interface ShopProps {
}

const Shop: FC<ShopProps> = ({}) => {
  return (
    <div className={s.shop}>
      <Top />
      <Tags />
      <Main />
    </div>
  );
};

export default Shop;
