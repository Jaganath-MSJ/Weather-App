// Filename: App.js
import React from "react";
import "../Toogle.css";

function ToggleSwitch({ tempature, setTemperature }) {
  return (
	<div className="toggle-switch" onClick={setTemperature}>
		<input type="checkbox" className="checkbox"
			name="toggle" id="toggle" checked={tempature} />
		<label className="label" htmlFor="toggle">
		<span className="inner" />
		<span className="switch" />
		</label>
	</div>

  );
}
function Toggle({ tempature, setTemperature }) {
  return (
    <React.Fragment>
      <ToggleSwitch tempature={tempature} setTemperature={setTemperature} />
    </React.Fragment>
  );
}
export default Toggle;
