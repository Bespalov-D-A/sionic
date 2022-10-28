import React, { FC } from "react";
import s from "./Footer.module.css";
import FooterContent from "./FooterContent/FooterContent";
import Info from "./Info/Info";
import RightSide from "./RightSide/RightSide";
import Social from "./Social/Social";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className={s.footer}>
      <div className={s.wrapper}>
        <div className={s["wrap-content"]}>
          <FooterContent />
          <Social />
        </div>
        <div className={s["right-side"]}>
          <RightSide />
        </div>
      </div>
      <Info />
    </div>
  );
};

export default Footer;
