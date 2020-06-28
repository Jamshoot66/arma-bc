import actionType from "store/actionTypes";

export const openModal = (modal) => (dispatch) => {
  dispatch({ type: actionType.OPEN_MODAL, payload: modal });
};

export const closeModal = () => (dispatch) => {
  dispatch({ type: actionType.CLOSE_MODAL });
};
