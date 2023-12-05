import React from "react";
import PropTypes from "prop-types";
import { styled } from "styled-components";

export function Toggle({ temperature, setTemperature }) {
  return (
    <ToggleStyled onClick={setTemperature}>
      <input
        type="checkbox"
        className="checkbox"
        name="toggle"
        id="toggle"
        checked={temperature}
      />
      <label className="label" htmlFor="toggle">
        <span className="inner" />
        <span className="switch" />
      </label>
    </ToggleStyled>
  );
}

const ToggleStyled = styled.div`
  position: relative;
  width: 75px;
  display: inline-block;
  text-align: left;
  top: 8px;
  .checkbox {
    display: none;
    &:checked + .label .inner {
      margin-left: 0;
    }
    &:checked + .label .switch {
      right: 0;
    }
  }
  .label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    border: 0 solid #bbb;
    border-radius: 20px;
    .inner {
      display: block;
      width: 200%;
      margin-left: -100%;
      transition: margin 0.3s ease-in 0s;
      &:before,
      &:after {
        float: left;
        width: 50%;
        height: 36px;
        padding: 0;
        line-height: 36px;
        color: #fff;
        font-weight: bold;
        box-sizing: border-box;
      }
      &:before {
        content: "C";
        padding-left: 10px;
        background-color: rgba(255, 255, 255, 0.4);
        color: #fff;
      }
      &:after {
        content: "F";
        padding-right: 10px;
        background-color: rgba(255, 255, 255, 0.4);
        color: #fff;
        text-align: right;
      }
    }
    .switch {
      display: block;
      width: 24px;
      margin: 5px;
      background: rgb(255, 255, 255);
      position: absolute;
      top: 0;
      bottom: 0;
      right: 40px;
      border: 0 solid #bbb;
      border-radius: 20px;
      transition: all 0.3s ease-in 0s;
    }
  }
`;

Toggle.propTypes = {
  temperature: PropTypes.bool.isRequired,
  setTemperature: PropTypes.func.isRequired,
};

export default Toggle;
