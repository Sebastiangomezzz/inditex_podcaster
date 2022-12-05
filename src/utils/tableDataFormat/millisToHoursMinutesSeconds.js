export const millisToHoursMinutesSeconds = (millis) => {
  const hours = Math.floor(millis / 3600000);
  const minutes = Math.floor((millis % 3600000) / 60000);
  const seconds = ((millis % 360000) % 60000) / 1000;
   //add 0 if seconds or hours or minutes is less than 10
    if (hours <= 9 && minutes <= 9 && seconds <= 9) {
      return `0${hours}:0${minutes}:0${seconds}`;
    } else if (hours <= 9 && minutes <= 9) {
      return `0${hours}:0${minutes}:${seconds}`;
    } else if (hours <= 9 && seconds <= 9) {
      return `0${hours}:${minutes}:0${seconds}`;
    } else if (minutes <= 9 && seconds <= 9) {
      return `${hours}:0${minutes}:0${seconds}`;
    } else if (hours <= 9) {
      return `0${hours}:${minutes}:${seconds}`;
    } else if (minutes <= 9) {
      return `${hours}:0${minutes}:${seconds}`;
    } else if (seconds <= 9) {
      return `${hours}:${minutes}:0${seconds}`;
    } else {
      return `${hours}:${minutes}:${seconds}`;
    }
};
