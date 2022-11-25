import React, { FC, useEffect, useState } from "react";
import Flickity from "react-flickity-component";
import { useAppSelector } from "../../../../store/hooks/hooks";
import { orm } from "../../../../store/models/models";
import { Itag } from "../../../../types/types";
import List from "../../../Global/List";
import Tag from "../../Tag/Tag";
import s from "./ProductVariations.module.css";

interface PropertiesProps {
  setSelectedVariation: any;
  productId: number;
  variationsList: any[];
}

const flickOptions = {
  draggable: false,
  freeScroll: false,
  wrapAround: false,
};

const ProductVariations: FC<PropertiesProps> = ({
  variationsList,
  productId,
  setSelectedVariation,
}) => {
  return (
    <div className={s.tags}>
      <Flickity
        className={s.list}
        elementType={"div"}
        options={flickOptions}
        disableImagesLoaded={false} 
        reloadOnUpdate 
        static 
      >
        <List
          items={variationsList}
          renderItem={(variation: any) => (
            <Tag
              callback={setSelectedVariation}
              variation={variation}
              key={variation.id}
            />
          )}
        />
      </Flickity>
    </div>
  );
};

export default ProductVariations;
