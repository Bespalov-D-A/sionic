import React, { FC, useEffect, useState } from "react";
import { Icollection } from "../../types/types";
import Collection from "./Collection/Collection";
import s from "./RightSide.module.css";
import Sale from "./Sale/Sale";
import collectionsData from './../../data/Collections.json'
import List from "../common/List";

interface RightSideProps {}

const RightSide: FC<RightSideProps> = ({}) => {
  const [collections, setCollections] = useState<Icollection[]>([]);

  useEffect(() => {
    getCollections()
  },[])

  const getCollections = () => {
    setCollections(collectionsData.map(item => (item)))
  }

  return (
    <div className={s["right-side"]}>
      <Sale />
      <List
        items={collections}
        renderItem={(collection: Icollection) => (
          <Collection collection={collection} key={collection.id} />
        )}
      />
    </div>
  );
};

export default RightSide;
