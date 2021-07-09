import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "./reducer";

const selectComman = (state) => state.commanMessage || initialState;
export const selectMessage = createSelector([selectComman], (data) => data);
