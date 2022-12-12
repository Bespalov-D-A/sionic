import { FC } from "react";
import { IProduct } from "../../../../types/productTypes";
import s from "./Main.module.css";
import List from "../../../common/List";
import Preloader from "../../../common/Preloader/Preloader";
import ProductCard from "../../../common/ProductCard/ProductCard";
import ShowMoreBtn from "../../../common/ShowMoreBtn/ShowMoreBtn";

interface MainPresentI {
  error: any;
  selectedCategory: number | null;
  products: IProduct[] | unknown;
  showMoreFunc: () => void;
  lastElementRef: React.MutableRefObject<HTMLDivElement>;
  isLoad: boolean;
}

const MainPresent: FC<MainPresentI> = ({
  isLoad,
  error,
  selectedCategory,
  products,
  showMoreFunc,
  lastElementRef,
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
            "Категории не были загружены"
          )
        ) : (
          "Ошибка загрузки данных"
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
      {(error && !products) || <ShowMoreBtn showMoreFunc={showMoreFunc} />}
    </>
  );
};

export default MainPresent;
