import { Ref } from "redux-orm";
import { Iproduct } from "./dataShopApiTypes";

export type productsType = Iproduct[] | undefined 

export interface IimageObj {
  id: number;
  product_id: number;
  image_name: string;
  image_url: string;
}

export interface Icollection {
  id: number;
  name: string;
  img: string;
}

export interface Itag {
  id: number;
  title: string;
  color: string;
}

export interface IproductCard {
  id: number;
  category_id: number;
  name: string;
  description: string;
}
