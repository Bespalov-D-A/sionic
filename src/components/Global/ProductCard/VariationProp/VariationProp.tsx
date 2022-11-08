import React, { FC, useEffect, useState } from "react";
import { getProductVariationPropValue } from "../../../../api/api";
import { createOrmObjects } from "../../../../func/func";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks/hooks";
import { orm } from "../../../../store/models/models";
import List from "../../List";
import Property from "./Property/Property";

interface VariationPropProp {
  selectedVariation: any;
}

const VariationProp: FC<VariationPropProp> = ({ selectedVariation }) => {
  const state = useAppSelector((state: any) => state);
  const dispatch = useAppDispatch();
  const session = orm.session(state.ormReducer);
  const [propList, setPropList] = useState<any[] | null>(null);
  const[dataIsLoad, setDataIsLoad] = useState<boolean>(false)
  const [switchRefreshSelectedVariation, setSwitchRefreshSelectedVariation] = useState<number | null>(null)

  const refreshData = (num: number): void => {
  setSwitchRefreshSelectedVariation(num)
  }

  useEffect(() => {
    if (selectedVariation) {
      getProductVariationPropValue(
        `?filter={"product_variation_id": ${selectedVariation.id}}`
      ).then((res) =>
        createOrmObjects(
          dispatch,
          res,
          setDataIsLoad,
          refreshData,
          "ADD_PRODUCT_VARIATION_PROPERTY_VALUE"
        )
      );
    }

   }, [selectedVariation]);

  useEffect(()=> {
    
     if (!propList) {
        const list = session.ProductVariationProperty.all()
          .toModelArray()
          .map((item: any) => item.ref);
        setPropList(list);
      }
  },[switchRefreshSelectedVariation])

  return (
    <ul>
      {propList ? (
        <List
          items={propList}
          renderItem={(property: any) => (
            <Property
              selectedVariation={selectedVariation}
              property={property}
              key={property.id}
              switchData={switchRefreshSelectedVariation}
            />
          )}
        />
      ) : (
        "Loading..."
      )}
    </ul>
  );
};

export default VariationProp;
