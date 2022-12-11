import { FC } from "react";
import { useMediaQuery } from "react-responsive";
import s from "./App.module.css";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import RightSide from "./components/RightSide/RightSide";

interface AppProps {}

const App: FC<AppProps> = ({}) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  return (
    <div className="App">
      <div className={s.wrapper}>
        <div className={s.content}>
          <Header />
        {isDesktopOrLaptop || <RightSide slider={true} />}
          <Content />
        </div>
        {isDesktopOrLaptop && <RightSide />}
      </div>
      <Footer />
    </div>
  );
};

export default App;
