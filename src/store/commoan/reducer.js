import { produce } from "immer";
import { CLEAR_MESSAGES, SET_MESSAGES } from "./type";
export const initialState = {
  message: "",
  type: "",
};

export const CommanReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_MESSAGES: {
        const { message, type } = action.payload;
        draft.message = message;
        draft.type = type ? "success" : "error";
        break;
      }
      case CLEAR_MESSAGES: {
        draft.message = "";
        draft.type = "";
        break;
      }
      default:
        return state;
    }
  });
