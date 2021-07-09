import { REQUEST_LOGIN, CHANGE_LOGIN_FORM } from "./type";
import { createAction } from "@reduxjs/toolkit";
import { withPayloadType } from "../../utils/createActionPayload";

export const loginRequest = createAction(REQUEST_LOGIN, withPayloadType());
export const changeForm = createAction(CHANGE_LOGIN_FORM, withPayloadType());
