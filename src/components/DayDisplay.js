import React, { useState } from "react";
import styled from "styled-components";
import Toggle from "./Toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWind,
  faDroplet,
  faCloudRain,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import DailyWeather from "./DailyWeather";
import { formatDate } from "../utils/DateFunction";
import { formatDayTime, convertTo12HourFormat } from "../utils/DayFunction";
import icons from "./ImgaePicker";

function DayDisplay({ forecastday }) {
  const [temperature, setTemperature] = useState(true);
  const [startIndex, setStartIndex] = useState(0);
  const handleScrollLeft = () => {
    setStartIndex((prevIndex) => prevIndex - 2);
  };

  const handleScrollRight = () => {
    setStartIndex((prevIndex) => prevIndex + 2);
  };
  const handleToggle = (e) => {
    e.preventDefault();
    setTemperature((prevTemperature) => !prevTemperature);
  };

  const hourForecast = () => {
    return forecastday.hour.map((hour, index) => (
      <DailyWeather
        temperature={temperature}
        temp_c={hour.temp_c}
        temp_f={hour.temp_f}
        img={hour.condition.icon}
        imgText={hour.condition.text}
        day={convertTo12HourFormat(hour.time.split(" ")[1])}
        key={index}
      />
    ));
  };

  return (
    <Container>
      <div className="header">
        <div className="image">
          <img
            src={icons[forecastday.day.condition.text]}
            alt={forecastday.day.condition.text}
          />
          <p>{forecastday.day.condition.text}</p>
        </div>
        <div>
          <Toggle temperature={temperature} setTemperature={handleToggle} />
        </div>
      </div>
      <div className="main">
        <h1>
          {Math.round(temperature ? forecastday.day.avgtemp_c : forecastday.day.avgtemp_f)}
          &#176;{temperature ? "C" : "F"}
        </h1>
        <h3>{formatDate(forecastday.date)}</h3>
        <h5>{formatDayTime(forecastday.date, false)}</h5>
      </div>
      <div className="other">
        <div>
          <FontAwesomeIcon icon={faWind} />
          <p>Wind {forecastday.day.maxwind_kph} km/h</p>
        </div>
        <p>|</p>
        <div>
          <FontAwesomeIcon icon={faDroplet} />
          <p>Humidity {forecastday.day.avghumidity} %</p>
        </div>
        <p>|</p>
        <div>
          <FontAwesomeIcon icon={faCloudRain} />
          <p>Rain {forecastday.day.daily_chance_of_rain} %</p>
        </div>
      </div>
      <div className="hourly">
        <FontAwesomeIcon
          style={{ display: startIndex <= 0 ? "none" : "" }}
          onClick={handleScrollLeft}
          icon={faArrowLeft}
        />
        {hourForecast().splice(startIndex, 5)}
        <FontAwesomeIcon
          style={{
            display: startIndex >= hourForecast().length - 5 ? "none" : "",
          }}
          onClick={handleScrollRight}
          icon={faArrowRight}
        />
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 0 1rem;
  width: 100%;
  .header {
    display: flex;
    justify-content: space-between;
    .image {
      display: flex;
      img {
        margin-top: -1rem;
        width: 13rem;
      }
      p {
        margin-top: 4rem;
        text-transform: lowercase;
        font-weight: 500;
        font-style: italic;
      }
    }
  }
  .main {
    text-align: left;
    margin-top: -2rem;
    width: max-content;
    h1 {
      font-size: 6rem;
      font-weight: 400;
      margin: 0;
    }
    p {
      text-align: center;
      margin: -0.5rem 0;
      font-weight: 600;
      font-style: italic;
    }
    h3 {
      font-size: 2rem;
    }
    h5 {
      margin-top: -1rem;
      font-size: 1.3rem;
    }
  }
  .other {
    display: flex;
    margin-top: -1rem;
    gap: 2rem;
    div {
      display: flex;
      gap: 1rem;
      svg {
        margin-top: 1rem;
      }
    }
  }
  .hourly {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    &>svg {
      transition: 0.3s ease-in-out;
      &:hover:last-child {
        transform: scale(1.5) translateX(4px);
      }
      &:hover:first-child {
        transform: scale(1.5) translateX(-4px);
      }
    }
  }
`;

export default DayDisplay;
