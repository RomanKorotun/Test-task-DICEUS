export const calculatePremiumGrowth = (
  current: number,
  previous: number
): number => {
  const growth = ((current - previous) / previous) * 100;
  return Math.ceil(growth * 10) / 10;
};
