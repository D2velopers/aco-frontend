import { takeEvery, call, put } from 'redux-saga/effects';
import { search } from '../api';
import action, { types } from '../actions';

const { searchRandomImg } = action;

export function* reqRandomImg() {
  try {
    const { data } = yield call(search.randomImg);
    yield put(searchRandomImg.success(data));
  } catch (error) {
    yield put(searchRandomImg.failure(error));
  }
}

export default function* watcher() {
  yield takeEvery(types.SEARCH_RANDOM_IMG.REQUEST, reqRandomImg);
}
