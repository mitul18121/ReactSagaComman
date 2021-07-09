import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createInjectorsEnhancer } from "redux-injectors";
import createSagaMiddleware from "redux-saga";
import { createReducer } from "./reducer";
import { useDispatch } from "react-redux";
import { routerMiddleware } from "connected-react-router";
import { history } from "../utils/history";

export const useAppDispatch = () => useDispatch();
export function configureAppStore() {
  const reduxSagaMonitorOptions = {};

  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  // Create the store with saga middleware
  const middlewares = [sagaMiddleware];

  if (history) {
    middlewares.push(routerMiddleware(history));
  }

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ];

  const store = configureStore({
    reducer: createReducer(),
    middleware: [...getDefaultMiddleware(), ...middlewares],
    devTools:
      /* istanbul ignore next line */
      process.env.NODE_ENV !== "production" ||
      process.env.PUBLIC_URL.length > 0,
    enhancers,
  });
  return store;
}
