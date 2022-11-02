import axios from "axios";
import { Icategory, Ierror, Ivariation, IvariationProp, IvariationPropListValue, IvariationPropValue } from "../types/dataShopApiTypes";
import { IimageObj, IproductCard } from "../types/types";

export const getProducts = async (): Promise<IproductCard[] | undefined> => {
  try {
    const resp = await axios.get(
      "https://test2.sionic.ru/api/Products?range=[0,10]"
    );
    return resp.data;
  } catch (e) {
    console.log(e);
  }
};

export const getCover = async (id: number): Promise<string | undefined> => {
  try {
    let resp = await axios.get<IimageObj>(
      "https://test2.sionic.ru/api/ProductImages/" + id
    );
    return "https://test2.sionic.ru/" + resp.data.image_url;
  } catch (e) {
    console.log(e);
  }
};

export const getCategories = async (
  range: string = ""
): Promise<Icategory[] | Ierror | undefined> => {
  try {
    const resp = await axios.get(
      `https://test2.sionic.ru/api/Categories${range}`
    );
    return resp.data;
  } catch (e) {
    console.log(e);
  }
};

export const getProductVariations = async (
  range: string = ""
): Promise<Ivariation[] | Ierror | undefined> => {
  try {
    const resp = await axios.get(
      `https://test2.sionic.ru/api/ProductVariations${range}`
    );
    return resp.data;
  } catch (e) {
    console.log(e);
  }
};

export const getProductVariationProp = async (
  range: string = ""
): Promise<IvariationProp[] | Ierror | undefined> => {
  try {
    const resp = await axios.get(
      `https://test2.sionic.ru/api/ProductVariationProperties${range}`
    );
    return resp.data;
  } catch (e) {
    console.log(e);
  }
};

export const getProductVariationPropListValues = async (
  range: string = ""
): Promise<IvariationPropListValue[] | Ierror | undefined> => {
  try {
    const resp = await axios.get(
      `https://test2.sionic.ru/api/ProductVariationPropertyListValues${range}`
    );
    return resp.data;
  } catch (e) {
    console.log(e);
  }
};

export const getProductVariationPropValue = async (
  range: string = ""
): Promise<IvariationPropValue[] | Ierror | undefined> => {
  try {
    const resp = await axios.get(
      `https://test2.sionic.ru/api/ProductVariationPropertyValues${range}`
    );
    return resp.data;
  } catch (e) {
    console.log(e);
  }
};

