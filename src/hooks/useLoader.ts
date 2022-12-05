import axios from "axios";
import { useState } from "react";
import {axiosErrorHandler} from "../utilites/fetch";

export const useLoader = (callback:  any) => {
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  const isFetch = async (...args:any) => {
    try {
      setIsLoad(true);
      await callback(...args);
    } catch (e) {
      axiosErrorHandler(e, setError)
    } finally {
      setIsLoad(false);
    }
  };

  return [isFetch, isLoad, error];
};
