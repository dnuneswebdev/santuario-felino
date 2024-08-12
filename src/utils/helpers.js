export const formatDate = (dateStr) => {
  const [year, month, day] = dateStr.split("-");
  let newDate = `${day}/${month}/${year}`;

  return newDate;
};
