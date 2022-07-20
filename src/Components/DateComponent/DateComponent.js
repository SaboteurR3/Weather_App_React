const DateComponent = (argument) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[argument.getDay()];
  let date = argument.getDate();
  let month = months[argument.getMonth()];
  let year = argument.getFullYear();

  return `${day} ${date} ${month} ${year}`;
};

export default DateComponent;
