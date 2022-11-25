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
  const count = useAppSelector((state) => state)

  useEffect(() => {
     const session = orm.session(orm.getEmptyState())
    session.Book.create<any>({
      id: 1,
      title: "Don Quixote",
      authorId: 4
    });
    session.Book.create<any>({
      id: 2,
      title: "Don Perdot",
      authorId: 4
    });
    session.Author.create<any>({
      id:4,
      name: 'DEN!'
    })
    setTimeout(() => {
      const rrr = session.Book.first()
      console.log(rrr.author)
      console.log(count)
    }, 1000)
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
