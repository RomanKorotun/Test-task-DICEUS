export const getStatusColor = (status: string): string => {
  switch (status) {
    case "Active":
      return "statusActive";
    case "Pending":
      return "statusPending";
    default:
      return "";
  }
};
