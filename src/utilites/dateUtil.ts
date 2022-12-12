import { compareAsc, setMinutes, setHours } from "date-fns";

//Проверка больше текущее время чем заданное или нет
export const minTimeFunc = (maxTime: number) => {
  const date = new Date();
  const newDate = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    maxTime
  );
  const equ = compareAsc(date, newDate);
  return !equ || equ !== -1 ? true : false;
};

//Проверка позднее ли выбранная дата, чем текущаяя
export const compareDate = (selectedDate: string | null, maxTime: number) => {
  if (!selectedDate) return null;
  const date = new Date();
  const newSelectedDate = new Date(selectedDate);
  //Если выбранная дата позже чем текущая
  const equ = compareAsc(newSelectedDate.getDate(), date.getDate());
  if (equ) return false;
  else return minTimeFunc(maxTime);
};

//Исключаем час, следующий за последним часом работы магазина
//для корректной работы minTime maxTime
export const timeItems = () => {
  return [setHours(setMinutes(new Date(), 0), 19)];
};
