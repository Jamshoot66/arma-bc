import actionType from "store/actionTypes";

export const addPosition = ({
  shooterLabel,
  targetLabel,
  elevations,
  direction,
}) => (dispatch, getStore) => {
  const newPositions = { ...getStore()?.positions };
  const key = `${shooterLabel}-${targetLabel}`;
  newPositions[key] = {
    direction,
    elevations,
  };

  dispatch({
    type: actionType.SET_COORDS,
    payload: { positions: newPositions },
  });
};
