const convertToMinutes = (days, hours, minutes) => {
  const convertedDays = days * 24 * 60;
  const convertedHours = hours * 60;

  return convertedDays + convertedHours + minutes;
};

export default convertToMinutes;
