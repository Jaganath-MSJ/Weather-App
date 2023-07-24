import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SideBar from "../components/SideBar";
import MainDisplay from "../components/MainDisplay";

function Home() {
  const [currentData, setCurrentData] = useState();
  const [search, setSearch] = useState();

    // useEffect(() => {
    //   async function handleGetWeather() {
    //     const data = await axios.get(
    //     //   `http://api.geonames.org/searchJSON?name=salem&country=IN&username=demo`
    //         "https://api.openweathermap.org/data/2.5/forecast?q=Usilampatti&appid=f4f84e25694f29fd5d1c3785edece506"
    //     );
    //     console.log(data.data);
    //   }
    //   handleGetWeather();
    // }, []);

  return (
    <Container>
        <MainDisplay />
        <SideBar setSearch={setSearch} search={search}/>
    </Container>
  );
}

const Container = styled.div`
  background: linear-gradient(to top right, rgb(237, 179, 205), rgb(155, 125, 183));
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 65% 35%;
`;

export default Home;