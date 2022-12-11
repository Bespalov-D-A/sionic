export const handlerClickOutside = (event, refArray, callback) => {
  refArray.find((item) => item.current.contains(event.target)) || callback();
};
