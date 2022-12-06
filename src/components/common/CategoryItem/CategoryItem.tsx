import  {FC} from 'react'
import {useAppDispatch} from '../../../hooks/useAppDispatch';
import {setSelectedCategory} from '../../../store/slices/commonSlice';
import {ICategory} from '../../../types/productTypes';
import s from './CategoryItem.module.css'

interface CategoryItemI {
  category: ICategory;
}

const CategoryItem: FC<CategoryItemI> = ({category}) => {
  const {id} = category
  const dispatch = useAppDispatch()

  const setCategory = () => {
    dispatch(setSelectedCategory(id))
  }

  const {name} = category

return <div onClick={setCategory} className={s.category}>{name}</div>
}


export default CategoryItem
