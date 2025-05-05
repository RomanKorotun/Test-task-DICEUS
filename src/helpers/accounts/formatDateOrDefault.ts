export const formatDateOrDefault = (dateString: string) => {
  const date = new Date(dateString);
  return !isNaN(date.getTime()) ? dateString : "---";
};
