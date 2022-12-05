import { FC, useEffect } from "react";
import { categoryService } from "../../../../API/categoryService";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../../hooks/useAppSelector";
import { useLoader } from "../../../../hooks/useLoader";
import { getAllCategoriesSelector } from "../../../../selectors/categorySelector";
import { ADD_PRODUCT_CATEGORY_PACK } from "../../../../store/models/Category/constants";
import { ICategory } from "../../../../types/productTypes";
import CategoryItem from "../../../common/CategoryItem/CategoryItem";
import List from "../../../common/List";
import s from "./Categories.module.css";

interface CategoriesI {}

const Categories: FC<CategoriesI> = ({}) => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state);

  const [isFetch, isLoad, error]: any = useLoader(async () => {
    const response = await categoryService.getAllCategories();
    dispatch({ type: ADD_PRODUCT_CATEGORY_PACK, payload: response.data });
  });

  useEffect(() => {
    isFetch();
  }, []);

  //@ts-ignore
  const categories = getAllCategoriesSelector(state);

  return (
    <div className={s.tags}>
      {isLoad && "LOAAAADIIING!"}
      <List
        //@ts-ignore
        items={categories}
        renderItem={(category: ICategory) => (
          <CategoryItem category={category} key={category.id} />
        )}
      />
    </div>
  );
};

export default Categories;
