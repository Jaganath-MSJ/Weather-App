import { styled } from "styled-components";

function MyClockComponent(props) {
  const { hours, minutes } = props;
  const minutesStyle = {
    transform: `rotate(${minutes * 6}deg)`,
  };
  const hoursStyle = {
    transform: `rotate(${hours * 30}deg)`,
  };
  return (
    <Clock>
      <div className="clock">
        <div className="analog-clock">
          <div className="dial minutes" style={minutesStyle} />
          <div className="dial hours" style={hoursStyle} />
        </div>
      </div>
    </Clock>
  );
}

const Clock = styled.div`
  .clock {
    width: 120px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    margin: 5px;
    .analog-clock {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      position: relative;
      background-color: transparent;
      .dial {
        position: absolute;
        left: 50%;
        width: 50px;
        height: 48px;
        transform-origin: bottom left;
        &.hours {
          width: 38px;
          height: 33px;
          top: 14px;
          border-left: solid 3px rgb(136, 96, 252);
        }
        &.minutes {
          border-left: solid 3px rgb(130, 130, 130);
        }
      }
    }
  }
`;

export default MyClockComponent;
