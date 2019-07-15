/* jshint ignore:start */
import { createStore, applyMiddleware, combineReducers } from "redux";

import { createLogger } from "redux-logger";

import userReducer from "./userReducer";

const configureStore = () => {
  let middlewares = [];
  middlewares.push(createLogger());

  const reducers = combineReducers({
    users: userReducer
  });
  return createStore(reducers, applyMiddleware(...middlewares));
};

export default configureStore();
/* jshint ignore:end */
