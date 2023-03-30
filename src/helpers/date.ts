 export const getFormmatedDate = (date: Date) => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  let s_month = month.toString();
  let s_day = day.toString();
  let s_hour = hour.toString();
  let s_minute = minute.toString();
  let s_second = second.toString();

  if (month < 10) {
    s_month = `0${month}`;
  }
  if (day < 10) {
    s_day = `0${day}`;
  }
  if (hour < 10) {
    s_hour = `0${hour}`;
  }
  if (minute < 10) {
    s_minute = `0${minute}`;
  }
  if (second < 10) {
    s_second = `0${second}`;
  }
  return `${year}-${s_month}-${s_day} ${s_hour}:${s_minute}:${s_second}`;
};

 