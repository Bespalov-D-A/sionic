import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import RouterComp from "../RouterComp/RouterComp";

interface ContentProps {}

const Content: FC<ContentProps> = ({}) => {
  return (
    <BrowserRouter>
      <RouterComp />
    </BrowserRouter>
  );
};

export default Content;
