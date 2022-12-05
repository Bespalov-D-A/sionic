import React, { FC } from "react";
import s from "./App.module.css";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import RightSide from "./components/RightSide/RightSide";

interface AppProps {}

const App: FC<AppProps> = ({}) => {

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
