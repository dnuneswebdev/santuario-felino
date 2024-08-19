export const formatDate = (dateStr) => {
  const [year, month, day] = dateStr.split("-");
  let newDate = `${day}/${month}/${year}`;

  return newDate;
};

export const defaultFormatDate = (dateStr) => {
  const [day, month, year] = dateStr.split("/");
  let newDate = `${year}-${month}-${day}`;

  return newDate;
};
