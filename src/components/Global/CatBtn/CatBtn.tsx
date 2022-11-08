import React, { FC } from "react";
import s from "./CatBtn.module.css";
import { Icategory } from "../../../types/dataShopApiTypes";
import {useAppDispatch} from "../../../store/hooks/hooks";

interface CatBtnProp {
  cat: Icategory;
  callback?: any;
}

const CatBtn: FC<CatBtnProp> = ({ cat, callback }) => {

  return (
    <div onClick={() => callback(cat.id)} className={s.cat}>
      {cat.name}
    </div>
  );
};

export default CatBtn;
