import  {FC} from 'react'
import {useVariation} from '../../../../hooks/useVariation'
import {IProductVariation} from '../../../../types/productTypes'
import List from '../../List'
import VariationItem from '../../VariationItem/VariationItem'

interface VariationsI {
  productId: number
}

const Variations: FC<VariationsI> = ({productId}) => {
  const variations = useVariation(productId)

  return <div>
  <List 
    items={variations}
    renderItem={(variation: IProductVariation) => <VariationItem price={variation.price} key={variation.id}/>}
  />
  </div>
}

export default Variations