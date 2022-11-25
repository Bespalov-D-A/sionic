import axios from "axios";
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
