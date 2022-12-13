import  { FC, SetStateAction, useMemo } from "react";
import {getCurrentPositionFunc} from "./../../../utilites/pagination";
import s from "./Pagination.module.css";

interface PaginationI {
	page:number,
		setPage: (num:number)=>void,
	pagesArray: number[] | null
}

//page - номер выбранной страницы
//pagesArray - массив цифр - номера страниц
const Pagination: FC<PaginationI> = ({ page, setPage, pagesArray }) => {
	const remapPages = useMemo(() => {
		//Берем от массива только 4 цифра и 4 слева от выбранной
		return getCurrentPositionFunc(page, pagesArray).map((item:number) => (
			<li
				key={item}
				onClick={() => setPage(item)}
				className={'waves-effect ' + ((item === page) ? 'active' : '')}
			><a href="#!">
				{item}
				</a>
			</li>
		));
	}, [page, pagesArray]);

	return <ul className={s.pagination + ' pagination'}>{pagesArray ? (pagesArray.length > 0 ? remapPages : '') : 'Ошибка загрузки пагинации'}</ul>;
};

export default Pagination;
