import React, { FC } from "react";
import { Icollection } from "../../../types/types";
import s from "./Collection.module.css";

interface CollectionProps {
  readonly collection: Icollection;
}

const Collection: FC<CollectionProps> = ({ collection }) => {
  const style = {
    backgroundImage: `url(${require("./../../../" + collection.img)})`,
  };

  return (
    <div style={style} className={s.collection}>
      <p className={s.title}>{collection.name}</p>
    </div>
  );
};

export default Collection;
