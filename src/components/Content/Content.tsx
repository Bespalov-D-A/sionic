import React, { FC } from "react";
import s from "./Content.module.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Cart from "./Cart/Cart";
import Delivery from "./Delivery/Delivery";
import Shop from "./Shop/Shop";
import History from "./History/History";
import { redirect } from "react-router-dom";
import NetWork from "./Shop/NetWork";

interface ContentProps {}

const Content: FC<ContentProps> = ({}) => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Navigate replace to="/shop" />} />
          <Route
            path={"/shop"}
            element={
              <NetWork>
                <Shop />
              </NetWork>
            }
          />
          <Route path={"/history"} element={<History />} />
          <Route path={"/delivery"} element={<Delivery />} />
          <Route path={"/cart"} element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Content;
