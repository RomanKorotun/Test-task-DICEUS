import { IconType } from "react-icons";
type DataItem = Record<string, number | string | IconType>;

export const sumByField = (data: DataItem[], field: string): string => {
  const sum = data.reduce((acc, item) => {
    const value = item[field];
    return typeof value === "number" ? acc + value : acc;
  }, 0);

  return new Intl.NumberFormat("en-US").format(sum);
};
