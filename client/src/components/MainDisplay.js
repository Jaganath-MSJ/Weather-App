import React, { useState, useRef } from "react";
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
import {
  formatDayTime,
  formatDay,
  convertTo12HourFormat,
} from "../utils/DayFunction";

function MainDisplay({ currentData, hourlyForecast, daysForecast }) {
  const [temperature, setTemperature] = useState(true);
  const scrollref = useRef();
  const handleToggle = (e) => {
    e.preventDefault();
    setTemperature((prevTemperature) => !prevTemperature);
  };

  const scrollLeft = () => {
    if (scrollref.current) {
      scrollref.current.scrollLeft += 300;
    }
  };

  // const HourForecast = () => {
  //   return hourlyForecast.map((hour, index) => (
  //     <DailyWeather
  //       temperature={temperature}
  //       temp_c={hour.temp_c}
  //       temp_f={hour.temp_f}
  //       img={hour.condition.icon}
  //       imgText={hour.condition.text}
  //       day={convertTo12HourFormat(hour.time.split(" ")[1])}
  //       key={index}
  //     />
  //   ));
  // };

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
        <h1>
          {Math.round(temperature ? currentData.temp_c : currentData.temp_f)}
          &#176;{temperature ? "C" : "F"}
        </h1>
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
          <p>Rain {currentData.precip_in * 10} %</p>
        </div>
      </div>
      <div className="daily">
        <button onClick={scrollLeft()}>ajsja</button>
        <div className="scroll" ref={scrollref}>{
           hourlyForecast.map((hour, index) => {return (
            <DailyWeather
              temperature={temperature}
              temp_c={hour.temp_c}
              temp_f={hour.temp_f}
              img={hour.condition.icon}
              imgText={hour.condition.text}
              day={convertTo12HourFormat(hour.time.split(" ")[1])}
              key={index}
            />
          )})
        }
        </div>
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
      margin-top: -1rem;
      width: 13rem;
    }
  }
  .main {
    text-align: left;
    margin-top: -3rem;
    h1 {
      font-size: 6rem;
      font-weight: 400;
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
    margin: 0 auto;
    button {
      cursor: pointer;
    }
    .scroll {
      display: flex;
      gap: 2rem;
      justify-content: center;
      overflow-x: scroll;
      scroll-behavior: smooth;
      scrollbar-width: none;
      -ms-overflow-style: none;
      /* scroll-snap-type: x mandatory; */
      /* -webkit-overflow-scrolling: touch; */
    }
  }
`;

export default MainDisplay;
