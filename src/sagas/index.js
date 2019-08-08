import { all } from 'redux-saga/effects';

import searchSaga from './searchSaga';
import gallerySaga from './gallerySaga';

export default function* rootSaga() {
  yield all([searchSaga(), gallerySaga()]);
}
