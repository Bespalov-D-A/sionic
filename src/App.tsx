import { $CombinedState } from "@reduxjs/toolkit";
import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "redux-orm";
import s from "./App.module.css";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import RightSide from "./components/RightSide/RightSide";
import { useAppDispatch, useAppSelector } from "./store/hooks/hooks";
import { orm } from "./store/models/models";
import { book } from "./store/selectors/book";
import { RootState } from "./store/store";

interface AppProps {}

const App: FC<AppProps> = ({}) => {
  const dispatch = useDispatch();
  const count = useAppSelector((state) => state);

  useEffect(() => {
    dispatch({
      type: "CREATE_BOOK",
      payload: {
        id: 2,
        title: "DON DOM",
      },
    });
    const session = orm.session();
    session.Book.create<any>({
      id: 1,
      title: "Don Quixote",
    });
  }, []);

  useEffect(() => {
    count && setTimeout(() => console.log(count), 2000);
  }, [count]);

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
