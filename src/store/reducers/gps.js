import actionType from "store/actionTypes";
import { isEmpty } from "utils";

const initialState = {
  shooter: {},
  target: {},
};

export const gps = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_COORDS: {
      const shooter = isEmpty(action.payload.shooter)
        ? state.shooter
        : {
            ...state.shooter,
            ...action.payload.shooter,
          };
      const target = isEmpty(action.payload.target)
        ? state.target
        : {
            ...state.target,
            ...action.payload.target,
          };
      return { ...state, shooter, target };
    }

    default:
      return state;
  }
};
