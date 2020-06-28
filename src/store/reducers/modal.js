import actionType from "store/actionTypes";

const initialState = {
  // isModalOpened: false,
  isModalOpened: true,
  // modal: null,
  modal: {
    title: "Настройки",
    component: "MODAL_SETTINGS",
  },
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
