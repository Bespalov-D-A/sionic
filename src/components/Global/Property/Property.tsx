import React, { FC } from "react";
import s from "./Property.module.css";

interface TagProps {
  variation: any;
  callback: any;
}

const Property: FC<TagProps> = ({ variation, callback }) => {
  const style = {
    backgroundColor: 'brown',
  };

  return (
    <div onClick={() => callback(variation)} style={style} className={s.tag}>
      {variation.price}
    </div>
  );
};

export default Property;
