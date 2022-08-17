import { put, takeEvery } from "redux-saga/effects";
import { SET_VEIO_LIST, VIDEO_LIST } from "../const/constant";

function* getVedioList() {
  let data = yield fetch("https://public.connectnow.org.uk/applicant-test/");
  data = yield data.json();
  console.log("data====================>", data);
  yield put({ type: SET_VEIO_LIST, state: data });
}

function* vedioSaga() {
  yield takeEvery(VIDEO_LIST, getVedioList);
}

export default vedioSaga;
