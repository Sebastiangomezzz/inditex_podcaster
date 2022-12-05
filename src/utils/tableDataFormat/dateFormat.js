export const dateFormat = (date) => {
  const dateObj = new Date(date);
  const month = dateObj.getMonth();
  const day = dateObj.getDate();
    const year = dateObj.getFullYear();
  if (month <= 9 && day <= 9) {
    return `0${day}/0${month}/${year}`;
  } else if (day <= 9) {
    return `0${day}/${month}/${year}`;
  } else if (month <= 9) {
    return `${day}/0${month}/${year}`;
  } else {
    return `${day}/${month}/${year}`;
  }
};
