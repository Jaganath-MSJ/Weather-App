import React from "react";
import SearchBar from "./SearchBar";
import MyClockComponent from "./SunClock";
import Meter from "./Meter";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";

function SideBar({ setSearch, search }) {
  return (
    <SideContainer>
      <SearchBar setSearch={setSearch} search={search} />
      <div className="sunClock">
        <div>
          <p>Sun Rise</p>
          <div>
            <MyClockComponent hours={6} minutes={20} />
            <p>11:24</p>
            <p>11:45</p>
          </div>
        </div>
        <div>
          <p>Golden Hour</p>
          <div>
            <MyClockComponent hours={6} minutes={30} />
            <p>6:00 AM</p>
            <p>6:49 PM</p>
          </div>
        </div>
        <div>
          <p>Sun Set</p>
          <div>
            <MyClockComponent hours={7} minutes={40} />
            <p>7:21</p>
            <p>7:24</p>
          </div>
        </div>
      </div>
      <div className="infomation">
        <div className="line" />
        <FontAwesomeIcon icon={faInfo} />
      </div>
      <Meter />
    </SideContainer>
  );
}

const SideContainer = styled.div`
  background: linear-gradient(to right, rgba(255, 255, 255, 0.25), transparent);
  padding: 2rem;
  height: 100%;
  .sunClock {
    display: flex;
    margin-top: 3rem;
    gap: 2.5rem;
    & > div > div {
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 3.5rem;
      padding-bottom: 1rem;
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
