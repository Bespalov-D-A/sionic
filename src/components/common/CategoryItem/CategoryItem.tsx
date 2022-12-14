import { FC } from "react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { setSelectedCategory } from "../../../store/slices/commonSlice";
import { ICategory } from "../../../types/productTypes";
import s from "./CategoryItem.module.css";

interface CategoryItemI {
  category: ICategory;
}

const CategoryItem: FC<CategoryItemI> = ({ category }) => {
  const selectedCategory = useAppSelector(
    (state) => state.commonSlice.selectedCategory
  );
  const { id } = category;
  const dispatch = useAppDispatch();

  const setCategory = () => {
    dispatch(setSelectedCategory(id));
  };

  const { name } = category;

  return (
    <div
      onClick={setCategory}
      className={s.category + " " + (selectedCategory === id ? s.active : "")}
    >
      {name}
    </div>
  );
};

export default CategoryItem;
