import React, { FC, useEffect, useRef, useState } from "react";
import Flickity from "react-flickity-component";
import Property from "../../Property/Property";
import s from "./ProductVariations.module.css";

interface PropertiesProps {
  selectedVariation: any;
  setSelectedVariation: any;
  productId: number;
  variationsList: any[];
}

const flickOptions = {
prevNextButtons: false
};

const ProductVariations: FC<PropertiesProps> = ({
  variationsList,
  setSelectedVariation,
  selectedVariation,
}) => {
  let flkty = useRef<any>();

  const rrr = () => {
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

  const selectVariationFunc = (value: string) => {
    let ind = variationsList.findIndex(item => item.id === selectedVariation.id )
    switch(value) {
      case 'next':
      if(variationsList[variationsList.length - 1].id === selectedVariation.id) break
      setSelectedVariation(variationsList[ind + 1])
        console.log(flkty.current)
      flkty.current.next()
      break;
      case 'prev':
      if(variationsList[0].id === selectedVariation.id) break
      setSelectedVariation(variationsList[ind - 1])
      flkty.current.previous()
      break;
      default: break
    }
  }

  return (
    <div className={s.tags}>
      <div onClick={()=> selectVariationFunc('prev')}className={'flickity-button flickity-prev-next-button previous'}></div>
      <div onClick={()=> selectVariationFunc('next')}className={'flickity-button flickity-prev-next-button next'}></div>
      <Flickity
        className={s.list}
        elementType={"div"}
        options={flickOptions}
        disableImagesLoaded={false}
        flickityRef={(item)=> flkty.current = item}
      >
        {rrr()}
      </Flickity>
    </div>
  );
};

export default ProductVariations;
