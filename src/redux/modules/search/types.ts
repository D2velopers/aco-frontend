import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { RandomImgType } from '../../../api/auth';
import { AsyncState } from '../../../lib/reducerUtils';

export type SearchAction = ActionType<typeof actions>;

export type SearchState = {
  randomImg: AsyncState<RandomImgType, Error>;
};
