import React, { FC } from "react";
import Logo from "../../Global/Logo/Logo";
import s from './FooterContent.module.css'

interface FooterContentProps {}

const FooterContent: FC<FooterContentProps> = ({}) => {
  return (
    <div className={s['footer-content']}>
      <Logo />
    </div>
  );
};

export default FooterContent;
