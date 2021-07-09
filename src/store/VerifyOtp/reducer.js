import { produce } from "immer";
import { CHANGE_OTP_FORM, CLEAN_OTP_FORM, REQUEST_OTP } from "./type";

export const initialState = {
  VCode: "",
};

export const otpReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CHANGE_OTP_FORM: {
        const {
          payload: { attr, value },
        } = action;
        draft[attr] = value;
        break;
      }
      case REQUEST_OTP: {
        draft.VCode = action.payload.VCode;
        break;
      }
      case CLEAN_OTP_FORM: {
        draft.VCode = null;
        break;
      }
      default:
        return state;
    }
  });
