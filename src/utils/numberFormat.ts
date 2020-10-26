export const numberFormat = (value: number | string) => {
  let val: number;

  if (typeof value === 'string') {
    val = parseInt(value);
  } else {
    val = value;
  }

  return val
    .toFixed()
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};
