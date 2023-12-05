import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWind,
  faDroplet,
  faCloudRain,
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import icons from "./ImgaePicker";
import Toggle from "./Toggle";
import DailyWeather from "./DailyWeather";
import { formatDate } from "../utils/DateFunction";
import {
  formatDayTime,
  convertTo12HourFormat,
  get24Hours,
} from "../utils/DayFunction";

function MainDisplay({ currentData, hourlyForecast }) {
  const [temperature, setTemperature] = useState(true);
  const [startIndex, setStartIndex] = useState(() => {
    const index = get24Hours(currentData.last_updated);
    if (index >= hourlyForecast.length - 5) return hourlyForecast.length - 5;
    return index;
  });
  const [currentHourlyForecast, setCurrentHourlyForecast] = useState([]);

  const handleScrollLeft = () => {
    setStartIndex((prevIndex) => {
      if (prevIndex <= 1) return prevIndex - 1;
      return prevIndex - 2;
    });
  };
  const handleScrollRight = () => {
    setStartIndex((prevIndex) => {
      if (prevIndex >= hourlyForecast.length - 6) return prevIndex + 1;
      return prevIndex + 2;
    });
  };
  const handleToggle = (e) => {
    e.preventDefault();
    setTemperature((prevTemperature) => !prevTemperature);
  };

  useEffect(() => {
    const hourForecast = [];
    for (let index = startIndex; index < startIndex + 5; index++) {
      hourForecast.push(hourlyForecast[index]);
    }
    setCurrentHourlyForecast(hourForecast);
  }, [startIndex, hourlyForecast]);

  return (
    <Container>
      <div className="header">
        <div className="image">
          <img
            src={icons[currentData.condition.text]}
            alt={currentData.condition.text}
          />
          <p>{currentData.condition.text}</p>
        </div>
        <div>
          <Toggle temperature={temperature} setTemperature={handleToggle} />
        </div>
      </div>
      <div className="main">
        <h1>
          {Math.round(temperature ? currentData.temp_c : currentData.temp_f)}
          &#176;{temperature ? "C" : "F"}
        </h1>
        <p>
          Feels like &nbsp;
          {Math.round(
            temperature ? currentData.feelslike_c : currentData.feelslike_f
          )}
          &#176;{temperature ? "C" : "F"}
        </p>
        <h3>{formatDate(currentData.last_updated)}</h3>
        <h5>{formatDayTime(currentData.last_updated, true)}</h5>
      </div>
      <div className="other">
        <div>
          <FontAwesomeIcon icon={faWind} />
          <p>Wind {currentData.wind_kph} km/h</p>
        </div>
        <p>|</p>
        <div>
          <FontAwesomeIcon icon={faDroplet} />
          <p>Humidity {currentData.humidity} %</p>
        </div>
        <p>|</p>
        <div>
          <FontAwesomeIcon icon={faCloudRain} />
          <p>Rain {Math.round(currentData.precip_in * 100)} %</p>
        </div>
      </div>
      <div className="hourly">
        <FontAwesomeIcon
          style={{ display: startIndex <= 0 ? "none" : "" }}
          onClick={handleScrollLeft}
          icon={faArrowLeft}
        />
        {currentHourlyForecast.map((hour) => (
          <DailyWeather
            temperature={temperature}
            temp_c={hour.temp_c}
            temp_f={hour.temp_f}
            imgText={hour.condition.text}
            day={convertTo12HourFormat(hour.time.split(" ")[1])}
            key={hour.time}
          />
        ))}
        <FontAwesomeIcon
          style={{
            display: startIndex >= hourlyForecast.length - 5 ? "none" : "",
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
        transform: scale(1.2);
        margin-top: -1rem;
        width: 13rem;
        height: 10rem;
      }
      p {
        margin-top: 8rem;
        margin-left: 1rem;
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
    & > svg {
      cursor: pointer;
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

MainDisplay.propTypes = {
  currentData: PropTypes.object.isRequired,
  hourlyForecast: PropTypes.array.isRequired,
};

export default MainDisplay;
