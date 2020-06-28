import actionType from "store/actionTypes";

export const saveSettings = (settings) => (dispatch) => {
  dispatch({ type: actionType.SAVE_SETTINGS, payload: { settings } });
};
