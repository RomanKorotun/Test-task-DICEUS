type DataItem = {
  line: string;
  expiringTech: number;
  expiringPremium: number;
};

export const calculateExposureDistribution = (
  data: DataItem[]
): Record<string, string> => {
  const totalExpiringTech = data.reduce(
    (total, item) => total + item.expiringTech,
    0
  );

  const distribution: Record<string, string> = {};

  data.forEach((item) => {
    if (totalExpiringTech > 0) {
      const exposurePercentage = (item.expiringTech / totalExpiringTech) * 100;
      distribution[item.line] = `${exposurePercentage.toFixed(1)}`;
    } else {
      distribution[item.line] = "0.0";
    }
  });

  return distribution;
};
