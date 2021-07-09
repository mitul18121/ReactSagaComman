import { takeLatest, put } from "redux-saga/effects";
import { request } from "../../utils/request";
import { REQUEST_LOGIN } from "./type";
import { push } from "connected-react-router";
import { commanReducerSetmessage } from "../commoan/action";

function* loginUser({ payload }) {
  try {
    const { data, status } = yield request({
      method: "POST",
      url: "http://localhost:8000/task/Api/Login",
      data: payload,
    });
    const { message, success, error } = data;
    if (status === 200) {
      localStorage.setItem("Token", data.data);
      yield put(commanReducerSetmessage({ message: message, type: success }));
      yield put(push("/"));
    } else {
      yield put(commanReducerSetmessage({ message: message, type: error }));
    }
  } catch (e) {
    // console.log("error", e);
    // yield put({ type: "USER_FETCH_FAILED", message: e.message });
    yield put(commanReducerSetmessage({ message: e.message, type: e.message }));
  }
}

export function* loginUserSaga() {
  yield takeLatest(REQUEST_LOGIN, loginUser);
}
