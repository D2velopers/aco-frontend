import { createReducer } from 'typesafe-actions';
import { SearchState, SearchAction } from './types';
import { getRandomImgAsync } from './actions';
import {
  asyncState,
  createAsyncReducer,
  transformToArray,
} from '../../../lib/reducerUtils';

const initialState: SearchState = {
  randomImg: asyncState.initial(),
};

const github = createReducer<SearchState, SearchAction>(
  initialState
).handleAction(
  transformToArray(getRandomImgAsync),
  createAsyncReducer(getRandomImgAsync, 'randomImg')
);

export default github;
