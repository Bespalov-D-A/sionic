import { FC } from "react";
import { IProduct } from "../../../../types/productTypes";
import s from "./Main.module.css";
import List from "../../../common/List";
import Preloader from "../../../common/Preloader/Preloader";
import ProductCard from "../../../common/ProductCard/ProductCard";
import ShowMoreBtn from "../../../common/ShowMoreBtn/ShowMoreBtn";
import {
  CATEGORY_WAS_NOT_LOADED,
  DATA_LOAD_ERROR,
} from "../../../../constants/messages";
import Pagination from "../../../common/Pagination/Pagination";
interface MainPresentI {
  error: any;
  selectedCategory: number | null;
  products: IProduct[] | unknown;
  showMoreFunc: () => void;
  lastElementRef: React.MutableRefObject<HTMLDivElement>;
  isLoad: boolean;
  page: number;
  setPage: (num: number) => void;
  pagesArray: number[] | null;
}

const MainPresent: FC<MainPresentI> = ({
  isLoad,
  error,
  selectedCategory,
  products,
  showMoreFunc,
  lastElementRef,
  page,
  setPage,
  pagesArray,
}) => {
  return (
    <>
      <div className={s.main}>
        {!error ? (
          selectedCategory ? (
            <List
              //@ts-ignore
              items={products}
              renderItem={(productCard: IProduct) => (
                <ProductCard productCard={productCard} key={productCard.id} />
              )}
            />
          ) : (
            { CATEGORY_WAS_NOT_LOADED }
          )
        ) : (
          { DATA_LOAD_ERROR }
        )}
        {(error && !products) || (
          <div className={s.infinite} ref={lastElementRef}></div>
        )}
      </div>

      {isLoad && (
        <div className={s["preloader-block"]}>
          {" "}
          <Preloader />
        </div>
      )}
      <Pagination page={page} setPage={setPage} pagesArray={pagesArray} />
      {(error && !products) || <ShowMoreBtn showMoreFunc={showMoreFunc} />}
    </>
  );
};

export default MainPresent;
