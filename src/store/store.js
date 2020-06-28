import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { saver } from "./middleware";
import rootReducer from "./reducers";

const setupStore = (initialState = {}) => {
  const middlewares = [thunkMiddleware, saver];

  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares)),
  );
};

export default setupStore;
