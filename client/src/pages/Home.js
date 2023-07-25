import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SideBar from "../components/SideBar";
import MainDisplay from "../components/MainDisplay";

function Home() {
  const [data, setData] = useState();
  const [daysForecast, setDaysForecast] = useState([]);
  const [search, setSearch] = useState();
  const [location, setLocation] = useState({
    latitude: "",
    longitude: "",
  });

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
      const data = await axios.get(
        //   `https://api.geonames.org/searchJSON?name=salem&country=IN&username=demo`
        `https://api.weatherapi.com/v1/forecast.json?key=69e7c91397de481b86051222232507&q=${location.latitude},${location.longitude}&days=6&aqi=s`
      );
      console.log(data.data);
      setData(data.data);
      setDaysForecast(data.data.forecast.forecastday);
    }
    if(location.latitude) {handleGetWeather();}
  }, [location]);

  return (
    <Container>
      {data && (
        <MainDisplay
          currentData={data.current}
          hourlyForecast={daysForecast[0].hour}
        />
      )}
      {data && (
        <SideBar
          todaysData={daysForecast[0]}
          location={data.location}
          setSearch={setSearch}
          search={search}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  background: linear-gradient(
    to top right,
    rgb(237, 179, 205),
    rgb(155, 125, 183)
  );
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 65% 35%;
  & > div {
    overflow: hidden;
  }
`;

export default Home;
