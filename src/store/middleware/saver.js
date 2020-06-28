export const localStorageKey = "bc-redux-store";

export const saver = (store) => (next) => (action) => {
  const storeToSave = store.getState();
  localStorage.setItem(localStorageKey, JSON.stringify(storeToSave));
  return next(action);
};
