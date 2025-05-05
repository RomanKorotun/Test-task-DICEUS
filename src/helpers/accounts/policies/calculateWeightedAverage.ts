import { IconType } from "react-icons";
type DataItem = Record<string, number | string | IconType>;

export const calculateAverage = (data: DataItem[], field: string): number => {
  let sum = 0;
  let count = 0;

  data.forEach((item) => {
    const value = item[field];
    if (typeof value === "number" && !isNaN(value)) {
      sum += value;
      count += 1;
    }
  });

  return count > 0 ? Number((sum / count).toFixed(1)) : 0;
};
