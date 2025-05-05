export const getRateChangeColor = (rate: number | string): number | string => {
  const numericRate = Number(rate);

  if (isNaN(numericRate)) {
    return rate;
  }

  return numericRate > 5 ? "rateWarning" : "rateNeutral";
};
