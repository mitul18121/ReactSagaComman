import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "./reducer";

// First select the relevant part from the state
const selectAuthState = (state) => state.auth || initialState;

export const selectLogin = createSelector([selectAuthState], (data) => data);
