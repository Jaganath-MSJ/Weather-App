import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import icons from "./ImgaePicker";

function DailyWeather({ temperature, temp_c, temp_f, imgText, day }) {
  return (
    <Container>
      <p>
        {Math.round(temperature ? temp_c : temp_f)}&#176;
        {temperature ? "C" : "F"}
      </p>
      <img src={icons[imgText]} alt={imgText} />
      <p>{day}</p>
    </Container>
  );
}

const Container = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  padding: 0 1.5rem;
  border-radius: 1rem;
  width: 5.5rem;
  height: 12.5rem;
  text-align: center;
  p {
    font-size: 1.2rem;
  }
  img {
    width: 4rem;
    height: 4rem;
  }
`;

DailyWeather.propTypes = {
  temperature: PropTypes.bool.isRequired,
  temp_c: PropTypes.number.isRequired,
  temp_f: PropTypes.number.isRequired,
  imgText: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
};

export default DailyWeather;
