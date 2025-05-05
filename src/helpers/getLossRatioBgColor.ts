type LossRatioColor = "lossRatioGreen" | "lossRatioYellow" | "lossRatioRed";

export const getLossRatioBgColor = (
  ratio: number | string
): LossRatioColor | string => {
  if (typeof ratio !== "number" || isNaN(ratio)) {
    return String(ratio);
  }

  if (ratio <= 32) {
    return "lossRatioGreen";
  } else if (ratio <= 66) {
    return "lossRatioYellow";
  } else {
    return "lossRatioRed";
  }
};
