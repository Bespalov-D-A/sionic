import { FC } from "react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { setMenuIsOpen } from "../../../store/slices/commonSlice";
import s from "./MobileMenuBtn.module.css";

interface MobileMenuBtnI {
  mobileBtn: React.MutableRefObject<HTMLDivElement>
}

const MobileMenuBtn: FC<MobileMenuBtnI> = ({mobileBtn}) => {
  const dispatch = useAppDispatch();

  const setMenu = () => {
  dispatch(setMenuIsOpen())
  }

  return (
    <div
      ref={mobileBtn}
      onClick={setMenu}
      className={s["mobile-btn"]}
    ></div>
  );
};

export default MobileMenuBtn;
