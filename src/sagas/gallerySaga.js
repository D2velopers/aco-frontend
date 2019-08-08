// ({ data: { images } }) => setEvents(images)

import { takeEvery, call, put } from 'redux-saga/effects';
import { search } from '../api';
import action, { types } from '../actions';

const { loadEventBanner } = action;

export function* reqRandomImg() {
  try {
    const { data } = yield call(search.randomImg);
    yield put(loadEventBanner.success(data));
  } catch (error) {
    yield put(loadEventBanner.failure(error));
  }
}

export default function* watcher() {
  yield takeEvery(types.LOAD_EVENT_BANNER.REQUEST, reqRandomImg);
}
