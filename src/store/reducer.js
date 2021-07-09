import { combineReducers } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";
import { history } from "../utils/history";

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export function createReducer(injectedReducers = {}) {
  // Initially we don't have any injectedReducers, so returning identity function to avoid the error

  return combineReducers({
    router: connectRouter(history),
    ...injectedReducers,
  });
}
