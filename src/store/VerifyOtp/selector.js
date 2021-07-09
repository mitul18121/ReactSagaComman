import { createSelector } from "@reduxjs/toolkit";
import { initialState } from "./reducer";

const selectOtpState = (state) => state.otp || initialState;

export const selectOtp = createSelector([selectOtpState], (data) => data);
