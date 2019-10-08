import { getRandomImgAsync, GET_RANDOM_IMG } from './actions';
import { getRandomImg, RandomImgType } from '../../../api/auth';
import { call, put, takeEvery } from 'redux-saga/effects';

function* getRandomImgSaga(
  action: ReturnType<typeof getRandomImgAsync.request>
) {
  try {
    const userProfile: RandomImgType[] = yield call(
      getRandomImg,
      action.payload
    );
    yield put(getRandomImgAsync.success(userProfile));
  } catch (e) {
    yield put(getRandomImgAsync.failure(e));
  }
}

export function* searchSaga() {
  yield takeEvery(GET_RANDOM_IMG, getRandomImgSaga);
}
