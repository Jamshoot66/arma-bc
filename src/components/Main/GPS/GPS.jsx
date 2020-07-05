import React from "react";
import PropTypes from "prop-types";
import { ShooterForm, TargetForm } from "./GPS.ui";

function GPS(props) {
  const {
    shooter,
    target,
    setShooterGPS,
    setShooterXY,
    setTargetGPS,
    setTargetXY,
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
      />

      <TargetForm
        gps={target.gps}
        height={target.height}
        x={target.x}
        y={target.y}
        onGPSChange={setTargetGPS}
        onCoordsChange={setTargetXY}
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
  setTargetGPS: PropTypes.func,
  setTargetXY: PropTypes.func,
};

GPS.defaultProps = {
  shooter: {},
  target: {},
  setShooterGPS: () => {},
  setShooterXY: () => {},
  setTargetGPS: () => {},
  setTargetXY: () => {},
};

export default GPS;
