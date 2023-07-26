import clear from "../images/clear.png";
import cloudy from "../images/cloudy.png";
import drizzle from "../images/drizzle.png";
import moderate from "../images/moderate.png";
import normalRain from "../images/normal_rain.png";
import partlyCloudy from "../images/partly_cloudy.png";
import patchy from "../images/patchy.png";
import sunny from "../images/sunny.png";
import thunder from "../images/thunder.png";
import torrential from "../images/torrential.png";
import fog from "../images/fog.png";

const icons = {
  "Sunny": sunny,
  "Partly cloudy": partlyCloudy,
  "Overcast": cloudy,
  "Clear": clear,
  "Cloudy": partlyCloudy,
  "Patchy rain possible": patchy,
  "Light rain": normalRain,
  "Patchy light rain with thunder": normalRain,
  "Light rain shower": normalRain,
  "Light drizzle": drizzle,
  "Patchy light drizzle": drizzle,
  "Torrential rain shower": torrential,
  "Heavy rain": thunder,
  "Thundery outbreaks possible": moderate,
  "Moderate or heavy rain shower": moderate,
  "Moderate rain": moderate,
  "Fog": fog,
  "Moderate rain at times": normalRain,
};
export default icons;
