import { combineReducers } from 'redux';
import search from './search/reducer';
import { searchSaga } from './search';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  search,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([searchSaga()]);
}
