import React, { FC } from "react";
import { Itag } from "../../../types/types";
import s from "./Tag.module.css";

interface TagProps {
  variation: any;
  callback: any;
}

const Tag: FC<TagProps> = ({ variation, callback }) => {
  const style = {
    backgroundColor: 'brown',
  };

  return (
    <div onClick={() => callback(variation)} style={style} className={s.tag}>
      {variation.title}
      {variation.price}
    </div>
  );
};

export default Tag;
