import { createAction } from "@reduxjs/toolkit";
import { withPayloadType } from "../../utils/createActionPayload";
import { CHANGE_OTP_FORM, CLEAN_OTP_FORM, REQUEST_OTP } from "./type";

export const otpRequest = createAction(REQUEST_OTP, withPayloadType());
export const otpForm = createAction(CHANGE_OTP_FORM, withPayloadType());
export const emptyOtpForm = createAction(CLEAN_OTP_FORM, withPayloadType());
