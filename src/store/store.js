import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { saver, localStorageKey } from "./middleware";
import rootReducer from "./reducers";

const savedStore = localStorage.getItem(localStorageKey);
const parsedSavedStore = savedStore ? JSON.parse(savedStore) : {};

const setupStore = (initialState = parsedSavedStore) => {
  const middlewares = [thunkMiddleware, saver];

  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
};

export default setupStore;
