import axios from "axios";

export const axiosErrorHandler = (e: any, setError: (arg: string) => void) => {
  if (axios.isAxiosError(e)) {
    console.log("Ошибка: ", e.message);
    setError(e.message);
  } else {
    console.log("unexpected error: ", e);
    setError("Неизвестная ошибка");
  }
};
