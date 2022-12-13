import { FC, useEffect } from "react";
import { categoryService } from "../../../../API/categoryService";
import {CATEGORY_LOAD_ERROR} from "../../../../constants/messages";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { useLoader } from "../../../../hooks/useLoader";
import { getAllCategoriesSelector } from "../../../../selectors/categorySelector";
import { ADD_PRODUCT_CATEGORY_PACK } from "../../../../store/models/Category/constants";
import { setSelectedCategory } from "../../../../store/slices/commonSlice";
import { ICategory } from "../../../../types/productTypes";
import CategoryItem from "../../../common/CategoryItem/CategoryItem";
import List from "../../../common/List";
import Preloader from "../../../common/Preloader/Preloader";
import s from "./Categories.module.css";

interface CategoriesI {}

const Categories: FC<CategoriesI> = ({}) => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);

  const [isFetch, isLoad, error]: any = useLoader(async () => {
    const response = await categoryService.getAllCategories();
    dispatch(setSelectedCategory(response.data[0].id));
    dispatch({ type: ADD_PRODUCT_CATEGORY_PACK, payload: response.data });
  });

  useEffect(() => {
    isFetch();
  }, []);

  //@ts-ignore
  const categories = getAllCategoriesSelector(state);

  return !error ? (
    <div className={s.tags}>
      {isLoad && <Preloader />}
      <List
        //@ts-ignore
        items={categories}
        renderItem={(category: ICategory) => (
          <CategoryItem category={category} key={category.id} />
        )}
      />
    </div>
  ) : (
    <>{CATEGORY_LOAD_ERROR}</>
  );
};

export default Categories;
