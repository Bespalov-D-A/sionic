import {FC} from "react";
import s from './Shop.module.css'
import Preloader from "../../common/Preloader/Preloader";
import Categories from "./Categories/Categories";
import Main from "./Main/Main";
import Top from "./Top/Top";

interface ShopPresentI {
  isLoad: boolean,
    selectedCat: number | null,
    error: any
}

const ShopPresent: FC<ShopPresentI> = ({error, isLoad, selectedCat}) => {
  return (
    !error 
    ?  <div className={s.shop}>
      <Top />
      <Categories />
      {isLoad ? <Preloader /> : !selectedCat || <Main />}
    </div>
    : <>Ошибка загрузки данных</>
  );

}

export default ShopPresent
