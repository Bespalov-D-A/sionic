import { FC, useEffect, useState } from "react";
import { Icollection } from "../../types/types";
import Collection from "./Collection/Collection";
import s from "./RightSide.module.css";
import Sale from "./Sale/Sale";
import collectionsData from "./../../data/Collections.json";
import Flickity from "react-flickity-component";
import { useMediaQuery } from "react-responsive";
import List from "../common/List";

interface RightSideProps {}

const RightSide: FC<RightSideProps> = ({}) => {
  const [collections, setCollections] = useState<Icollection[]>([]);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  const flkctyOptions = {
    pageDots: false,
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
    newArr.unshift(<Sale />);
    return newArr;
  };

  return (
    <div className={s["right-side"]}>
      {isDesktopOrLaptop ? (
        <Flickity options={flkctyOptions}>
          {remapCollectionsItem(collections)}
        </Flickity>
      ) : (
        <>{remapCollectionsItem(collections)}</>
      )}
    </div>
  );
};

export default RightSide;
