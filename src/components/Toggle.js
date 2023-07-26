// Filename: App.js
import React from "react";
import "../Toogle.css";

function ToggleSwitch({ temperature, setTemperature }) {
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
function Toggle({ temperature, setTemperature }) {
  return (
    <React.Fragment>
      <ToggleSwitch temperature={temperature} setTemperature={setTemperature} />
    </React.Fragment>
  );
}
export default Toggle;
