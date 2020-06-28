import actionType from "store/actionTypes";

const initialState = {
  isModalOpened: true,
};

export const modal = (state = initialState, action) => {
  switch (action.type) {
    case actionType.OPEN_MODAL:
      return { ...state, isModalOpened: true, modal: action.payload.modal };

    case actionType.CLOSE_MODAL:
      return { ...state, isModalOpened: false };

    default:
      return state;
  }
};
