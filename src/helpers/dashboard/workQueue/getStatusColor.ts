export const getStatusColor = (status: string): string => {
  switch (status) {
    case "New":
      return "statusNew";
    case "Pending Review":
      return "statusPending";
    case "Completed":
      return "statusCompleted";
    default:
      return "";
  }
};
