import { FC, useEffect, useRef } from "react";
import Flickity from "react-flickity-component";
import { useVariation } from "../../../../hooks/useVariation";
import { IProductVariation } from "../../../../types/productTypes";
import VariationItem from "../../VariationItem/VariationItem";
import s from "./Variations.module.css";

interface VariationsI {
  productId: number;
  setSelectedVariation: any;
  selectedVariation: number | null;
}

const Variations: FC<VariationsI> = ({
  selectedVariation,
  productId,
  setSelectedVariation,
}) => {
  let flkty = useRef<any>();
  const variations: IProductVariation[] = useVariation(productId);

  const flickOptions = {
    draggable: false,
    freeScroll: false,
    wrapAround: false,
    prevNextButtons: false,
  };

  const setVariation = (index:number) => {
        setSelectedVariation(variations[index].id);
  }

  useEffect(()=> {
    if(variations.length > 0)
  flkty.current.on('settle', (index:number)=>setVariation(index))
  },[variations])

  const remapVariations = () => {
    return variations.map((variation: IProductVariation) => (
      <VariationItem
        price={variation.price}
        id={variation.id}
        setSelectedVariation={setSelectedVariation}
        key={variation.id}
      />
    ));
  };

  const selectVariationFunc = (value: string) => {
    let ind = variations.findIndex(
      (item: IProductVariation) => item.id === selectedVariation
    );
    switch (value) {
      case "next":
        //if (variations[variations.length - 1].id === selectedVariation) break;
        //setSelectedVariation(variations[ind + 1].id);
        flkty.current.next();
        break;
      case "prev":
        //if (variations[0].id === selectedVariation) break;
        //setSelectedVariation(variations[ind - 1].id);
        flkty.current.previous();
        break;
      default:
        break;
    }
  };


  return (
    <div className={s.variations}>
      <div
        onClick={() => selectVariationFunc("prev")}
        className={"flickity-button flickity-prev-next-button previous"}
      ></div>
      <div
        onClick={() => selectVariationFunc("next")}
        className={"flickity-button flickity-prev-next-button next"}
      ></div>
      <Flickity
        className={s.list}
        elementType={"div"}
        //@ts-ignore
        options={flickOptions}
        disableImagesLoaded={false}
        flickityRef={(item: any) => (flkty.current = item)}
        //reloadOnUpdate
        //static
      >
        {remapVariations()}
      </Flickity>
    </div>
  );
};

export default Variations;
