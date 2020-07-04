import actionType from "store/actionTypes";

const initialState = {
  shooter: {},
  target: {},
};

export const gps = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_COORDS: {
      const shooter = {
        ...state.shooter,
        ...action.payload.shooter,
      };
      const target = {
        ...state.target,
        ...action.payload.target,
      };
      return { ...state, shooter, target };
    }

    default:
      return state;
  }
};
