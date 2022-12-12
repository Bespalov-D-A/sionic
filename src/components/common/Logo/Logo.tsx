import { FC } from "react";
import {Navigate, redirect, useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import {closeMobileMenu} from "../../../store/slices/commonSlice";
import s from "./Logo.module.css";

interface LogoProps {}

const Logo: FC<LogoProps> = ({}) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const clickLogo = () => {
    navigate('/shop')
    dispatch(closeMobileMenu())
  }

  return (
    <h1 onClick={()=>clickLogo()} className={s.logo}>React</h1>
  );
};

export default Logo;
