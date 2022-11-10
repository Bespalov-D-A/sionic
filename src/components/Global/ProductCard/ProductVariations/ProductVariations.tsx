import React, { FC, useEffect, useRef, useState } from "react";
import Flickity from "react-flickity-component";
import { selectVariationFunc } from "../../../../func/func";
import Property from "../../Property/Property";
import s from "./ProductVariations.module.css";

interface PropertiesProps {
  selectedVariation: any;
  setSelectedVariation: any;
  productId: number;
  variationsList: any[];
}

const flickOptions = {
  prevNextButtons: false,
};

const ProductVariations: FC<PropertiesProps> = ({
  variationsList,
  setSelectedVariation,
  selectedVariation,
}) => {
  let flkty = useRef<any>();

  const variationListRemap = () => {
    return variationsList.map((variation) => {
      return (
        <Property
          callback={setSelectedVariation}
          variation={variation}
          key={variation.id}
        />
      );
    });
  };

  const nextPrevClick = (direction: "next" | "previous") => {
    let step = () => flkty.current[direction]();
    selectVariationFunc(
      direction,
      variationsList,
      selectedVariation.id,
      setSelectedVariation,
      step
    );
  };

  return (
    <div className={s.tags}>
      <div
        onClick={() => nextPrevClick("previous")}
        className={"flickity-button flickity-prev-next-button previous"}
      ></div>
      <div
        onClick={() => nextPrevClick("next")}
        className={"flickity-button flickity-prev-next-button next"}
      ></div>
      <Flickity
        className={s.list}
        elementType={"div"}
        options={flickOptions}
        disableImagesLoaded={false}
        flickityRef={(item) => (flkty.current = item)}
      >
        {variationListRemap()}
      </Flickity>
    </div>
  );
};

export default ProductVariations;
