import actionTypes from "store/actionTypes";

export const localStorageKey = "bc-redux-store";

export const saver = ({ getState, dispatch }) => (next) => (action) => {
  if (typeof action === "function") {
    return action(dispatch, getState);
  }

  const savedStore = localStorage.getItem(localStorageKey);
  const storeToSave = savedStore ? JSON.parse(savedStore) : {};

  if (action?.type === actionTypes.SAVE_SETTINGS) {
    storeToSave.settings = { ...action.payload.settings };
  }

  localStorage.setItem(localStorageKey, JSON.stringify(storeToSave));
  return next(action);
};
