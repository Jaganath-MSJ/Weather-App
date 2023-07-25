import React, { useState } from "react";
import styled from "styled-components";
import Toggle from "./Toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWind,
  faDroplet,
  faCloudRain,
} from "@fortawesome/free-solid-svg-icons";
import DailyWeather from "./DailyWeather";
import { formatDate } from "../utils/DateFunction";
import { formatDayTime, formatDay } from "../utils/DayFunction";

function MainDisplay({ currentData, daysForecast }) {
  const [temperature, setTemperature] = useState(true);
  const handleToggle = (e) => {
    e.preventDefault();
    setTemperature((prevTemperature) => !prevTemperature);
  };
  return (
    <Container>
      <div className="header">
        <div>
          <img
            src={currentData.condition.icon}
            alt={currentData.condition.text}
          />
        </div>
        <div>
          <Toggle temperature={temperature} setTemperature={handleToggle} />
        </div>
      </div>
      <div className="main">
        <h1>{Math.round(temperature ? currentData.temp_c : currentData.temp_f)}&#176;{temperature ? "C" : "F"}</h1>
        <h3>{formatDate(currentData.last_updated)}</h3>
        <h5>{formatDayTime(currentData.last_updated)}</h5>
      </div>
      <div className="other">
        <div>
          <FontAwesomeIcon icon={faWind} />
          <p>Wind {currentData.wind_kph} km/h</p>
        </div>
        <p>|</p>
        <div>
          <FontAwesomeIcon icon={faDroplet} />
          <p>Hum {currentData.humidity} %</p>
        </div>
        <p>|</p>
        <div>
          <FontAwesomeIcon icon={faCloudRain} />
          <p>Rain {currentData.precip_in * currentData.vis_km} %</p>
        </div>
      </div>
      <div className="daily">
        {daysForecast.map((day, index) => {
          return (
            <DailyWeather
              temperature={temperature}
              temp_c={day.day.avgtemp_c}
              temp_f={day.day.avgtemp_f}
              img={day.day.condition.icon}
              imgText={day.day.condition.text}
              day={formatDay(day.date)}
              key={index}
            />
          );
        })}
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 2rem;
  .header {
    display: flex;
    justify-content: space-between;
    img {
      width: 13rem;
    }
  }
  .main {
    text-align: left;
    margin-top: -3rem;
    h1 {
      font-size: 5rem;
      margin: 0;
    }
    h3 {
      font-size: 2rem;
    }
    h5 {
      font-size: 1.3rem;
    }
  }
  .other {
    display: flex;
    gap: 2rem;
    div {
      display: flex;
      gap: 1rem;
      svg {
        margin-top: 1rem;
      }
    }
  }
  .daily {
    display: flex;
    gap: 2rem;
    justify-content: center;
  }
`;

export default MainDisplay;
