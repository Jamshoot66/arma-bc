import React from "react";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import actions from "store/actions";
import { ShooterForm, TargetForm } from "./GPS.ui";

function GPS() {
  const dispatch = useDispatch();
  const shooter = {
    gps: useSelector((store) => store.gps.shooter.gps, shallowEqual),
    height: useSelector((store) => store.gps.shooter.height, shallowEqual),
    x: useSelector((store) => store.gps.shooter.x, shallowEqual),
    y: useSelector((store) => store.gps.shooter.y, shallowEqual),
  };

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

export default GPS;
