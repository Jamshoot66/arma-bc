import React from "react";
import PropTypes from "prop-types";
import { useDispatch, shallowEqual, useSelector, connect } from "react-redux";
import actions from "store/actions";
import { ShooterForm, TargetForm } from "./GPS.ui";

function GPS(props) {
  const dispatch = useDispatch();

  const { shooter } = props;

  const target = {
    gps: useSelector((store) => store.gps.target.gps, shallowEqual),
    height: useSelector((store) => store.gps.target.height, shallowEqual),
    x: useSelector((store) => store.gps.target.x, shallowEqual),
    y: useSelector((store) => store.gps.target.y, shallowEqual),
  };

  return (
    <div>
      <ShooterForm
        gps={shooter.gps}
        height={shooter.height}
        x={shooter.x}
        y={shooter.y}
        onGPSChange={(gps) => {
          dispatch(actions.setGPS({ shooter: { gps } }));
        }}
        onCoordsChange={({ x, y }) => {
          dispatch(actions.setXY({ shooter: { x, y } }));
        }}
      />

      <TargetForm
        gps={target.gps}
        height={target.height}
        x={target.x}
        y={target.y}
        onGPSChange={(gps) => {
          dispatch(actions.setGPS({ target: { gps } }));
        }}
        onCoordsChange={({ x, y }) => {
          dispatch(actions.setXY({ target: { x, y } }));
        }}
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
};

GPS.defaultProps = {
  shooter: {},
};

const getFormData = (who) => (store) => ({
  gps: store.gps[who].gps,
  height: store.gps[who].height,
  x: store.gps[who].x,
  y: store.gps[who].y,
});

export default connect((store) => ({
  shooter: getFormData("shooter")(store),
}))(GPS);
