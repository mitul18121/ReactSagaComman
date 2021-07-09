import { createAction } from "@reduxjs/toolkit";
import { withPayloadType } from "../../utils/createActionPayload";
import { CHANGE_REGISTER_FORM, EMPTY_REGISTER, REQUEST_REGISTER } from "./type";

export const registerRequest = createAction(
  REQUEST_REGISTER,
  withPayloadType()
);

export const changeRegisterForm = createAction(
  CHANGE_REGISTER_FORM,
  withPayloadType()
);

export const emptyRegisterForm = createAction(
  EMPTY_REGISTER,
  withPayloadType()
);
