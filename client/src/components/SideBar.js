import React from "react";
import SearchBar from "./SearchBar";
import MyClockComponent from "./SunClock";
import Meter from "./Meter";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { getHours, getMins } from "../utils/DayFunction";
import { reduceTime } from "../utils/TimeFunction";

function SideBar({ todaysData, location, setSearch, search }) {
  return (
    <SideContainer>
      <SearchBar location={location} setSearch={setSearch} search={search} />
      <div className="sunClock">
        <div>
          <p>Sun Rise</p>
          <div>
            <MyClockComponent
              hours={getHours(todaysData.astro.sunrise)}
              minutes={getMins(todaysData.astro.sunrise)}
            />
            <p>{todaysData.astro.sunrise}</p>
          </div>
        </div>
        <div>
          <p>Golden Hour</p>
          <div>
            <MyClockComponent
              hours={getHours(reduceTime(todaysData.astro.sunrise, 8))}
              minutes={getMins(reduceTime(todaysData.astro.sunrise, 8))}
            />
            <p>{reduceTime(todaysData.astro.sunrise, 8)}</p>
            <MyClockComponent
              hours={getHours(reduceTime(todaysData.astro.sunset, -7))}
              minutes={getMins(reduceTime(todaysData.astro.sunset, -7))}
            />
            <p>{reduceTime(todaysData.astro.sunset, -7)}</p>
          </div>
        </div>
        <div>
          <p>Sun Set</p>
          <div>
            <MyClockComponent
              hours={getHours(todaysData.astro.sunset)}
              minutes={getMins(todaysData.astro.sunset)}
            />
            <p>{todaysData.astro.sunset}</p>
          </div>
        </div>
      </div>
      <div className="infomation">
        <div className="line" />
        <FontAwesomeIcon icon={faInfo} />
      </div>
      <Meter airQuality={todaysData.day.uv / 2 - 1} uv={todaysData.day.uv} />
    </SideContainer>
  );
}

const SideContainer = styled.div`
  background: linear-gradient(to right, rgba(255, 255, 255, 0.25), transparent);
  padding: 2rem;
  height: 100%;
  .sunClock {
    display: flex;
    margin-top: 1.5rem;
    gap: 2.5rem;
    & > div > div {
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 3.5rem;
      padding: 1rem 0;
    }
    & > div:nth-child(odd) {
      margin-top: 3rem;
    }
  }
  .infomation {
    display: flex;
    margin-top: 2rem;
    .line {
      height: 1px;
      margin: 14px 10px;
      width: 90%;
      background-color: rgba(255, 255, 255, 0.5);
    }
    svg {
      padding: 0.5rem 0.7rem;
      background-color: rgba(255, 255, 255, 0.4);
      border-radius: 1rem;
    }
  }
  .meter {
    display: flex;
    gap: 3rem;
  }
`;

export default SideBar;
