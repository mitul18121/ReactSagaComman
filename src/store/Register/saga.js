import { takeLatest, put } from "redux-saga/effects";
import { request } from "../../utils/request";
import { push } from "connected-react-router";
import { emptyRegisterForm } from "./action";
import { REQUEST_REGISTER } from "./type";
import { commanReducerSetmessage } from "../commoan/action";

function* registerUser({ payload }) {
  try {
    const { data, status } = yield request({
      method: "POST",
      url: "http://localhost:8000/task/Api/Register",
      data: payload,
    });
    const { message, success, error } = data;
    if (status === 200) {
      yield put(commanReducerSetmessage({ message: message, type: success }));
      yield put(emptyRegisterForm());
      yield put(push("/verifyotp"));
    } else {
      yield put(commanReducerSetmessage({ message: message, type: error }));
    }
  } catch (err) {
    yield put(
      commanReducerSetmessage({ message: err.message, type: err.error })
    );
  }
}

export function* registerUserSaga() {
  yield takeLatest(REQUEST_REGISTER, registerUser);
}
