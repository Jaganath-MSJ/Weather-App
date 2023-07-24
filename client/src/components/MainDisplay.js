import React, { useState } from "react";
import styled from "styled-components";
import Toggle from "./Toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWind,
  faDroplet,
  faCloudRain,
} from "@fortawesome/free-solid-svg-icons";

function MainDisplay() {
  const [tempature, setTemperature] = useState(true);
  const handleToggle = (e) => {
    e.preventDefault();
    setTemperature((prevTemperature) => !prevTemperature);
  };
  return (
    <Container>
      <div className="header">
        <div>
          <img src="https://openweathermap.org/img/wn/10n@2x.png" />
        </div>
        <div>
          <Toggle tempature={tempature} setTemperature={handleToggle} />
        </div>
      </div>
      <div className="main">
        <h1>27&#176;C</h1>
        <h3>17th Jun '21</h3>
        <h5>Thrusday | 2:45 AM</h5>
      </div>
      <div className="other">
        <div>
          <FontAwesomeIcon icon={faWind} />
          <p>Wind 10 km/h</p>
        </div>
        <p>|</p>
        <div>
          <FontAwesomeIcon icon={faDroplet} />
          <p>Hum 54%</p>
        </div>
        <p>|</p>
        <div>
          <FontAwesomeIcon icon={faCloudRain} />
          <p>Rain 0.2%</p>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 2rem;
  text-align: left;
  .header {
    display: flex;
    justify-content: space-between;
    img {
      width: 13rem;
    }
  }
  .main {
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
`;

export default MainDisplay;
