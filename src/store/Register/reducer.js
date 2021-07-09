import { produce } from "immer";
import { CHANGE_REGISTER_FORM, EMPTY_REGISTER, REQUEST_REGISTER } from "./type";

export const initialState = {
  Fname: "",
  Lname: "",
  Email: "",
  Password: "",
  Phone: "",
};

export const registerReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    console.log(action.payload);
    switch (action.type) {
      case CHANGE_REGISTER_FORM: {
        const {
          payload: { attr, value },
        } = action;
        draft[attr] = value;
        break;
      }
      case REQUEST_REGISTER: {
        const { Fname, Lname, Phone, Email, Password } = action.payload;
        draft.Fname = Fname;
        draft.Lname = Lname;
        draft.Phone = Phone;
        draft.Password = Password;
        draft.Email = Email;
        break;
      }

      case EMPTY_REGISTER: {
        draft.Fname = null;
        draft.Lname = null;
        draft.Phone = null;
        draft.Password = null;
        draft.Email = null;
        break;
      }
      default:
        return state;
    }
  });
