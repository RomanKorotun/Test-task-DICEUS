export const formatNumberWithCommas = (value: number): string => {
  if (value === 0) return "0";
  return value.toLocaleString("en-US");
};
