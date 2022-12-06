import { FC } from "react";
import s from "./ShowMoreBtn.module.css";

interface ShowMoreI {
  showMoreFunc: () => void;
}

const ShowMoreBtn: FC<ShowMoreI> = ({ showMoreFunc }) => {
  return (
    <div className={s.wrap}>
      <input
        type="button"
        onClick={() => showMoreFunc()}
        value="Показать показать больше товаров"
        className={s["show-more-btn"]}
      />
    </div>
  );
};

export default ShowMoreBtn;
