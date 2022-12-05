export interface IProductVariationPropertyValues {
  id: number,
  product_variation_id: number,
  product_variation_property_id: number,
  value_string: string,
  value_int: number,
  value_float: string,
  product_variation_property_list_value_id: number
}

export interface IProductVariationPropertyListValues {
  id: number;
  product_variation_property_id: number;
  title: string;
  value: string;
}

export interface IProductVariationProperties {
  id: number;
  name: string;
  type: number;
}

export interface IProductVariation {
  id: number;
  product_id: number;
  price: number;
  stock: number;
}

export interface ICategory {
  id: number;
  name: string;
}

export interface IProductCover {
  id: number;
  product_id: number;
  image_name: string;
  image_url: string;
}

export interface IProduct {
  id: number;
  category_id: number;
  name: string;
  description: string;
}
