import { FC, useEffect, useState } from "react";
import { Icollection } from "../../types/types";
import Collection from "./Collection/Collection";
import s from "./RightSide.module.css";
import Sale from "./Sale/Sale";
import collectionsData from "./../../data/Collections.json";
import Flickity from "react-flickity-component";

interface RightSideProps {
  slider?: boolean;
}

const RightSide: FC<RightSideProps> = ({ slider }) => {
  const [collections, setCollections] = useState<Icollection[]>([]);

  const flkctyOptions = {
    pageDots: false,
    draggable: true,
    contain: true,
  };

  useEffect(() => {
    getCollections();
  }, []);

  const getCollections = () => {
    setCollections(collectionsData.map((item) => item));
  };

  const remapCollectionsItem = (arr: Icollection[]) => {
    const newArr = arr.map((collection) => (
      <Collection collection={collection} key={collection.id} />
    ));
    return [<Sale key="sale" />, ...newArr];
  };

  return (
    <div className={s["right-side"]}>
      {slider ? (
        <Flickity
          options={flkctyOptions}
          reloadOnUpdate={true}
        >
          {remapCollectionsItem(collections)}
        </Flickity>
      ) : (
        <>{remapCollectionsItem(collections)}</>
      )}
    </div>
  );
};

export default RightSide;
