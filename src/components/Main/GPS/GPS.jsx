import React from "react";
import PropTypes from "prop-types";
import { ShooterForm, TargetForm } from "./GPS.ui";

function GPS(props) {
  const {
    shooter,
    target,
    setShooterGPS,
    setShooterXY,
    setShooterHeight,
    setTargetGPS,
    setTargetXY,
    setTargetHeight,
  } = props;

  return (
    <div>
      <ShooterForm
        gps={shooter.gps}
        height={shooter.height}
        x={shooter.x}
        y={shooter.y}
        onGPSChange={setShooterGPS}
        onCoordsChange={setShooterXY}
        onHeightChange={setShooterHeight}
      />

      <TargetForm
        gps={target.gps}
        height={target.height}
        x={target.x}
        y={target.y}
        onGPSChange={setTargetGPS}
        onCoordsChange={setTargetXY}
        onHeightChange={setTargetHeight}
      />
    </div>
  );
}

GPS.propTypes = {
  shooter: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    gps: PropTypes.number,
    height: PropTypes.number,
  }),
  target: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    gps: PropTypes.number,
    height: PropTypes.number,
  }),
  setShooterGPS: PropTypes.func,
  setShooterXY: PropTypes.func,
  setShooterHeight: PropTypes.func,
  setTargetGPS: PropTypes.func,
  setTargetXY: PropTypes.func,
  setTargetHeight: PropTypes.func,
};

GPS.defaultProps = {
  shooter: {},
  target: {},
  setShooterGPS: () => {},
  setShooterXY: () => {},
  setShooterHeight: () => {},
  setTargetGPS: () => {},
  setTargetXY: () => {},
  setTargetHeight: () => {},
};

export default GPS;
