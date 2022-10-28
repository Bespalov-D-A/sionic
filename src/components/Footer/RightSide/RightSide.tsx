import React, { FC } from "react";
import s from './RightSide.module.css'
import Apps from "./Apps/Apps";

interface RightSideProps {}

const RightSide: FC<RightSideProps> = ({}) => {
  return <div>
  <Apps />
  </div>;
};

export default RightSide;
