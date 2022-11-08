import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks/hooks";
import { orm } from "../../../../store/models/models";
import { setCategory } from "../../../../store/reducers/shop";
import { Icategory } from "../../../../types/dataShopApiTypes";
import CatBtn from "../../../Global/CatBtn/CatBtn";
import List from "../../../Global/List";
import s from "./Categories.module.css";

interface PropertiesProps {}

const Properties: FC<PropertiesProps> = ({}) => {
  const state = useAppSelector((state: any) => state);
  const dispatch = useAppDispatch();
  const session = orm.session(state.ormReducer);
  const [categories, setCategories] = useState<Icategory[]>([]);

  useEffect(() => {
    setCategories(
      session.Category.all()
        .toModelArray()
        .map((item: any) => item)
    );
  }, []);

  const selectCatFunc = (catId: number) => {
    dispatch(setCategory(catId));
  };

  return (
    <div className={s.categories}>
      <List
        items={categories}
        renderItem={(cat: Icategory) => (
          <CatBtn callback={selectCatFunc} cat={cat} key={cat.id} />
        )}
      />
    </div>
  );
};

export default Properties;
