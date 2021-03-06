import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import makeRootReducer from "./reducers";

export default (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk, promiseMiddleware()];

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = [];

  let composeEnhancers = compose;

  if (
    process.env.NODE_ENV === "development" &&
    process.env.BUILD_TARGET === "client"
  ) {
    const composeWithDevToolsExtension =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    if (typeof composeWithDevToolsExtension === "function") {
      composeEnhancers = composeWithDevToolsExtension;
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    makeRootReducer({}),
    initialState,
    composeEnhancers(applyMiddleware(...middleware), ...enhancers)
  );
  store.asyncReducers = {};

  if (module.hot) {
    module.hot.accept("./reducers", () => {
      const makeRootReducer = require("./reducers").default;
      store.replaceReducer(makeRootReducer(store.asyncReducers));
    });
  }
  return store;
};
