export interface Ierror {
  status: string;
  messages: [];
}

export interface Icategory {
  id: number;
  name: string;
}

export interface Iproduct {
  id: number;
  category_id: number;
  name: string;
  description: string;
}

export interface IproductCover {
  id: number;
  product_id: number;
  image_name: string;
  image_url: string;
}

export interface Ivariation {
  id: number;
  product_id: number;
  price: number;
  stock: number;
}

export interface IvariationProp {
  id: number;
  type: number;
  name: string;
}

export interface IvariationPropListValue {
  id: number;
  product_variation_property_id: number;
  title: string;
  value: string;
}

export interface IvariationPropValue {
  id: number;
  product_variation_id: number;
  product_variation_property_id: number;
  value_string: string;
  value_int: number | null;
  value_float: number | null;
  product_variation_property_list_value_id: number | null;
}
