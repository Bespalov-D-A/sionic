import React, { FC, useEffect, useState } from "react";
import s from "./Property.module.css";
import { selectVariationPropValue } from "../../../../../func/func";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../store/hooks/hooks";
import { orm } from "../../../../../store/models/models";

interface PropProps {
  switchData: boolean;
  property: any;
  selectedVariation: any;
}

const Property: FC<PropProps> = ({
  switchData,
  selectedVariation,
  property,
}) => {
  const state = useAppSelector((state: any) => state);
  const session = orm.session(state.ormReducer);
  const [valueObj, setValueObj] = useState<any | null>(null);
  const [dataIsLoad, setDataIsLoad] = useState<boolean>(false);
  const [changedVariations, setChangedVariations] = useState<any[]>([]);

  //useEffect(()=>console.log(property),[])

  useEffect(() => {
    if (selectedVariation) {
      const propValue = session.ProductVariationPropertyValue.all()
        .filter(
          (item: any) =>
            item.product_variation_id === selectedVariation.id &&
            item.product_variation_property_id === property.id
        )
        .toModelArray();
      console.log(propValue);
      setValueObj(selectVariationPropValue(session, propValue, property));
      setDataIsLoad(true);
    }
  }, [switchData]);

  useEffect(() => {
    setDataIsLoad(false);
  }, [selectedVariation]);

  return (
    <li className={s.property}>
      <span>{property.name}</span>
      <p
        className={s.value + ' ' + (!dataIsLoad ? s.loading : '')}
        style={{ 
          color: !dataIsLoad ? '#727280' : ''
        }}>
        { valueObj && valueObj.value}
      
      </p>
    </li>
  );
};

export default Property;
