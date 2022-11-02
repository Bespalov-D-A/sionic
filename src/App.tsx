import React, { FC, useEffect } from "react";
import s from "./App.module.css";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import RightSide from "./components/RightSide/RightSide";
import { useAppDispatch, useAppSelector } from "./store/hooks/hooks";
import { orm } from "./store/models/models";

interface AppProps {}

const App: FC<AppProps> = ({}) => {
  useEffect(() => {
     const session = orm.session(orm.getEmptyState())
  }, []);

  return (
    <div className="App">
      <div className={s.wrapper}>
        <div className={s.content}>
          <Header />
          <Content />
        </div>
        <RightSide />
      </div>
      <Footer />
    </div>
  );
};

export default App;
