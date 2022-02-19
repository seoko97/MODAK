const checkNumber = (n: number) => (n >= 10 ? n : `0${n}`);
export const dateParser = (date: Date) => {
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();

  return `${y}-${checkNumber(m)}-${checkNumber(d)}`;
};
