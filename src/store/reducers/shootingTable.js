import actionType from "../actionTypes";

const initialState = {
  positions: {},
};

export const shootingTable = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_POSITIONS: {
      return { positions: action.payload.positions };
    }
    default:
      return state;
  }
};
