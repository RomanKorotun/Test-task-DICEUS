export const getStatusColor = (status: string): string => {
  switch (status) {
    case "Active":
      return "statusActive";
    case "Under review":
      return "statusUnderRiview";
    default:
      return "";
  }
};
