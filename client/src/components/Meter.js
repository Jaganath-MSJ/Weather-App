import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

function Meter({ airQuality, uv }) {
  return (
    <div className="meter">
      <div>
        <p>Air Quality</p>
        <ReactSpeedometer
          value={airQuality}
          minValue={1}
          maxValue={5}
          segments={10}
          maxSegmentLabels={5}
          width={200}
          height={200}
          dimensionUnit="px"
          startColor="rgba(255, 255, 255, 0.4)"
          endColor="rgb(114,64,253)"
          textColor="white"
          ringWidth={10}
          needleHeightRatio={0.7}
          needleColor="rgba(255, 255, 255, 0.7)"
          needleTransition="easeQuadInOut"
          needleTransitionDuration={2000}
          labelFontSize="14px"
          valueTextFontSize="0px"
        />
      </div>
      <div>
        <p>UV Index</p>
        <ReactSpeedometer
          value={uv}
          minValue={1}
          maxValue={10}
          segments={10}
          maxSegmentLabels={5}
          width={200}
          height={200}
          dimensionUnit="px"
          startColor="rgba(255, 255, 255, 0.4)"
          endColor="rgb(114,64,253)"
          textColor="white"
          ringWidth={10}
          needleHeightRatio={0.7}
          needleColor="rgba(255, 255, 255, 0.7)"
          needleTransition="easeQuadInOut"
          needleTransitionDuration={2000}
          labelFontSize="14px"
          valueTextFontSize="0px"
        />
      </div>
    </div>
  );
}

export default Meter;
