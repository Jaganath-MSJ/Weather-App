import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SideBar from "../components/SideBar";
import MainDisplay from "../components/MainDisplay";
import DayDisplay from "../components/DayDisplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [data, setData] = useState();
  const [daysForecast, setDaysForecast] = useState([]);
  const [search, setSearch] = useState();
  const [location, setLocation] = useState({
    latitude: "",
    longitude: "",
  });
  const [startPage, setStartPage] = useState(0);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by your browser.");
    }
  }, []);

  useEffect(() => {
    async function handleGetWeather() {
      try {
      const data = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=69e7c91397de481b86051222232507&q=${
          search ? search : `${location.latitude},${location.longitude}`
        }&days=6&aqi=s`
      );
      console.log(data.data);
      setData(data.data);
      setDaysForecast(data.data.forecast.forecastday);
    } catch (err) {
      alert("No weather result found to searched place");
    }
  };
    if (location.latitude) {
      handleGetWeather();
    }
  }, [location, search]);

  const handleScrollRight = () => {
    setStartPage((prevIndex) => prevIndex + 1);
  };
  const handleScrollLeft = () => {
    setStartPage((prevIndex) => prevIndex - 1);
  };

  const backgroundFun = () => {
    const hours = new Date(data.current.last_updated).getHours();
    console.log("hours", hours);
    if (hours < 19 && hours > 4) {
      return "rgb(237, 179, 205),rgb(155, 125, 183)";
    } else {
      return "rgb(73,53,92),rgb(151,125,178)";
    }
  };

  return (
    <>
      {data && (
        <Container color={backgroundFun()}>
          <div className="mainPage">
            <FontAwesomeIcon
              style={{ display: startPage === 0 ? "none" : "" }}
              onClick={handleScrollLeft}
              icon={faAngleLeft}
              size="3x"
            />
            {startPage === 0 ? (
              <MainDisplay
                currentData={data.current}
                hourlyForecast={daysForecast[0].hour}
              />
            ) : (
              <DayDisplay forecastday={daysForecast[startPage]} />
            )}
            <FontAwesomeIcon
              style={{
                display: startPage === 5 ? "none" : "",
              }}
              onClick={handleScrollRight}
              icon={faAngleRight}
              size="3x"
            />
          </div>
          <SideBar
            todaysData={daysForecast[startPage]}
            location={data.location}
            setSearch={setSearch}
            backgroundFun={backgroundFun}
          />
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  background: linear-gradient(to top right, ${(props) => props.color});
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 65% 35%;
  cursor: default;
  & > div {
    overflow: hidden;
  }
  .mainPage {
    padding: 2rem 1rem;
    display: flex;
    & > svg {
      cursor: pointer;
      margin: auto 0;
      transition: 0.5s ease-in-out;
      &:hover:last-child {
        transform: translateX(5px);
      }
      &:hover:first-child {
        transform: translateX(-5px);
      }
    }
  }
`;

export default Home;
