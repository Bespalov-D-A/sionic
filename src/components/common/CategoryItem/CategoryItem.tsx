import  {FC} from 'react'
import {ICategory} from '../../../types/productTypes';
import s from './CategoryItem.module.css'

interface CategoryItemI {
  category: ICategory;
}

const CategoryItem: FC<CategoryItemI> = ({category}) => {
  const {name} = category

return <div className={s.category}>{name}</div>
}


export default CategoryItem
