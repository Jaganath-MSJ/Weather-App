import { parse, addMinutes, format } from "date-fns";

export function reduceTime(timeString, value) {
  const parsedTime = parse(timeString, "h:mm a", new Date());
  const reducedDateTime = addMinutes(parsedTime, value);
  const reducedTimeString = format(reducedDateTime, "h:mm a");
  return reducedTimeString;
}
