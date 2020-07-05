import actionType from "store/actionTypes";
import { parseGPS, calcGPS } from "utils";

export const setGPS = ({ shooter, target }) => (dispatch) => {
  const parsedShooterCoords = parseGPS(shooter?.gps);
  const parsedShooter = { ...shooter, ...parsedShooterCoords };

  const parsedTargetCoords = parseGPS(target?.gps);
  const parsedTarget = { ...target, ...parsedTargetCoords };

  dispatch({
    type: actionType.SET_COORDS,
    payload: { shooter: parsedShooter, target: parsedTarget },
  });
};

export const setXY = ({ shooter, target }) => (dispatch, getState) => {
  const { shooter: storedShooter, target: storedTarget } = getState().gps;

  const newShooter = {
    x: shooter?.x ?? storedShooter.x,
    y: shooter?.y ?? storedShooter.y,
  };

  const parsedShooterGPS = calcGPS(newShooter.x, newShooter.y);

  const parsedShooter = {
    ...newShooter,
    ...parsedShooterGPS,
  };

  const newTarget = {
    x: target?.x ?? storedTarget.x,
    y: target?.y ?? storedTarget.y,
  };

  const parsedTargetGPS = calcGPS(newTarget.x, newTarget.y);
  const parsedTarget = { ...newTarget, ...parsedTargetGPS };

  dispatch({
    type: actionType.SET_COORDS,
    payload: { shooter: parsedShooter, target: parsedTarget },
  });
};

export const setHeight = ({ shooter, target }) => (dispatch) => {
  dispatch({
    type: actionType.SET_COORDS,
    payload: { shooter, target },
  });
};
