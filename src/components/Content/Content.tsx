import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import RouterComp from "../RouterComp/RouterComp";

interface ContentProps {}

const Content: FC<ContentProps> = ({}) => {
  return (
      <RouterComp />
  );
};

export default Content;
