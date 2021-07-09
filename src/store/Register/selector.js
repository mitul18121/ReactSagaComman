import { createSelector } from "@reduxjs/toolkit";

import { initialState } from "./reducer";
const selectRegisterState = (state) => state.register || initialState;

export const selectRegister = createSelector(
  [selectRegisterState],
  (data) => data
);
