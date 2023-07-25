export function formatDate(dateString) {
  const months = [
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

  const dateParts = dateString.split("-");
  const day = parseInt(dateParts[2], 10);
  const monthIndex = parseInt(dateParts[1], 10) - 1;
  const year = parseInt(dateParts[2], 10);

  const monthName = months[monthIndex];

  let formattedDay = day;
  if (day >= 11 && day <= 13) {
    formattedDay = day + "th";
  } else if (day % 10 === 1) {
    formattedDay = day + "st";
  } else if (day % 10 === 2) {
    formattedDay = day + "nd";
  } else if (day % 10 === 3) {
    formattedDay = day + "rd";
  } else {
    formattedDay = day + "th";
  }

  return formattedDay + " " + monthName + " '" + (year % 100);
}
