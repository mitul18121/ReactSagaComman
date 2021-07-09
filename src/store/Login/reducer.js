import { produce } from "immer";
import { CHANGE_LOGIN_FORM, EMPTY_LOGIN_FORM, REQUEST_LOGIN } from "./type";

export const initialState = {
  email: "",
  password: "",
};

export const loginReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CHANGE_LOGIN_FORM: {
        const {
          payload: { attr, value },
        } = action;
        draft[attr] = value;
        break;
      }
      case REQUEST_LOGIN: {
        draft.email = action.payload.email;
        draft.password = action.payload.password;
        break;
      }
      case EMPTY_LOGIN_FORM: {
        const { email, password } = action.payload;
        draft.email = email;
        draft.password = password;
        break;
      }
      default:
        return state;
    }
  });
