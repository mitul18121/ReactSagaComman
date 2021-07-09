import { push } from "connected-react-router";
import { put, takeLatest } from "redux-saga/effects";
import { request } from "../../utils/request";
import { commanReducerSetmessage } from "../commoan/action";
import { emptyOtpForm } from "./action";
import { REQUEST_OTP } from "./type";

function* verifyOyp({ payload }) {
  try {
    const { data, status } = yield request({
      method: "POST",
      url: "http://localhost:8000/task/Api/VerifyOTP",
      data: payload,
    });
    console.log(data, status);
    const { message, success, error } = data;
    if (status === 200) {
      yield put(commanReducerSetmessage({ message: message, type: success }));
      yield put(emptyOtpForm());
      yield put(push("/login"));
    } else {
      yield put(commanReducerSetmessage({ message: message, type: error }));
    }
  } catch (err) {
    yield put(
      commanReducerSetmessage({ message: err.message, type: err.error })
    );
  }
}

export function* verifyOypSaga() {
  yield takeLatest(REQUEST_OTP, verifyOyp);
}
