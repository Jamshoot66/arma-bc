import actionType from "../actionTypes";

const initialState = {
  gridSize: 100,
  weapon: "mk6",
  aimOnCenter: true,
};

export const settings = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SAVE_SETTINGS:
      return { ...state, ...action.payload.settings };

    default:
      return state;
  }
};
