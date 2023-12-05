import React from "react";
import PropTypes from "prop-types";
import "../Toogle.css";

export function Toggle({ temperature, setTemperature }) {
  return (
    <div className="toggle-switch" onClick={setTemperature}>
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
    </div>
  );
}

Toggle.propTypes = {
  temperature: PropTypes.bool.isRequired,
  setTemperature: PropTypes.func.isRequired,
};

export default Toggle;
