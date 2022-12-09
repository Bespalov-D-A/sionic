export const threeDots = (str:string, maxLength:number, end?: boolean) => {
  if(!end)
 return str.length >= maxLength-3 ? str.slice(0, maxLength-3)+'...' : str;
  else 
 return str.length >= maxLength-3 ? '...'+str.slice(-maxLength-3) : str;
}
