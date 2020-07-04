import actionType from "store/actionTypes";
import { parseGPS } from "utils";

export const setGPS = ({ shooter, target }) => (dispatch) => {
  const parsedShooterCoords = parseGPS(shooter.gps);
  const parsedShooter = { ...shooter, ...parsedShooterCoords };

  const parsedTargetCoords = parseGPS(target.gps);
  const parsedTarget = { ...target, ...parsedTargetCoords };

  dispatch({
    type: actionType.SET_COORDS,
    payload: { shooter: parsedShooter, target: parsedTarget },
  });
};
