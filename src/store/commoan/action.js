import { createAction } from "@reduxjs/toolkit";
import { withPayloadType } from "../../utils/createActionPayload";
import { CLEAR_MESSAGES, SET_MESSAGES } from "./type";

export const commanReducerSetmessage = createAction(
  SET_MESSAGES,
  withPayloadType()
);
export const commanReducerCleanMessage = createAction(
  CLEAR_MESSAGES,
  withPayloadType()
);
