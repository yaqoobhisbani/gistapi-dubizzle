export const formatDate = (date) => {
  const currentDate = new Date(date);
  return `${currentDate.getMonth()}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
};
