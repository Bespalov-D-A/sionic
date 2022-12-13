import {IProduct} from "../types/productTypes";

export const getProductsInCatFunc = (products: IProduct[] | unknown, page: number, limit:number ) => {

  if(!products || !Array.isArray(products)) return []
    const newIndex = (page-1) * limit
    const newProducts = [...products]
   return  newProducts.splice(newIndex, limit )
}
