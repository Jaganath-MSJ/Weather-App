export function formatDayTime(dateString) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const formattedDate = new Date(dateString);
  const dayOfWeekName = daysOfWeek[formattedDate.getDay()];

  return `${dayOfWeekName} | ${convertTo12HourFormat(dateString.split(" ")[1])}`;
}

export function convertTo12HourFormat(time24) {
  const [hours, minutes] = time24.split(':').map(Number);
  const period = hours >= 12 ? 'PM' : 'AM';
  const hours12 = hours % 12 || 12;

  return `${hours12}:${String(minutes).padStart(2, '0')} ${period}`;
}

export function formatDay(dateString) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const formattedDate = new Date(dateString);
  const dayOfWeekName = daysOfWeek[formattedDate.getDay()];

  return dayOfWeekName;
}

export function getHours(timeString) {
  const time = timeString.split(" ")[0].split(":");
  return Number(time[0]);
}

export function getMins(timeString) {
  const time = timeString.split(" ")[0].split(":");
  return Number(time[1]);
}
