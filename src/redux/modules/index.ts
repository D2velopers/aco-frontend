import { combineReducers } from 'redux';
import auth, { githubSaga } from './auth';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  auth,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([githubSaga()]);
}
