import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { Ivariation } from "../../../types/variation";
import s from "./Variation.module.css";

interface VariationProps {
  readonly productID: number;
}

const Variation: FC<VariationProps> = ({ productID }) => {
  const [variation, setVariation] = useState<Ivariation[] | Ivariation | null>(
    null
  );

  useEffect(() => {
    getVariation();
  }, []);

  useEffect(() => {
  }, [variation])

  const getVariation = async () => {
    let url = "https://test2.sionic.ru/api/ProductVariations";
    let filter = `?filter={"product_id":${productID}}`;
    let resp = await axios.get<Ivariation>(url + filter);
    setVariation(resp.data);
  };

  return <div className={s.variation}></div>;
};

export default Variation;
