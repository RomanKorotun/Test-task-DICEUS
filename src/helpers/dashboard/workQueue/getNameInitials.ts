export const getNameInitials = (name: string) => {
  const nameParts = name.trim().split(" ").filter(Boolean);

  if (nameParts.length >= 2) {
    return `${nameParts[0][0].toUpperCase()}${nameParts[1][0].toUpperCase()}`;
  } else if (nameParts[0].length >= 2) {
    return `${nameParts[0][0].toUpperCase()}${nameParts[0][1].toUpperCase()}`;
  } else {
    return `${nameParts[0][0].toUpperCase()}`;
  }
};
