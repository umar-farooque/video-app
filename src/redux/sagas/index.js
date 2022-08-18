import { put, takeEvery } from 'redux-saga/effects';
import { GET_VIDEO_LIST } from '../constants';
import { setVideoList } from '../features/videos';

function* getVedioList() {
  let data = yield fetch('https://public.connectnow.org.uk/applicant-test/');
  data = yield data.json();

  yield put(setVideoList(data));
}

function* vedioSaga() {
  yield takeEvery(GET_VIDEO_LIST, getVedioList);
}

export default vedioSaga;
