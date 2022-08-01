export const PaginationControl = (n: number, max: number): number => {
  if (n === 1) {
    return 5;
  } else if (n > 1 && n < 4) {
    return 4;
  } else if (n >= 4 && n < max - 3) {
    return 2;
  } else if (max - 3 === n) {
    return 3;
  } else if (max - 3 < n) {
    return 5;
  }
  return 0;
};
