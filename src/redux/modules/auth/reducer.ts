import { createReducer } from 'typesafe-actions';
import { getStorage, setStorage } from '../../../lib/useStorage';
import { GithubState, GithubAction } from './types';
import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_ERROR,
} from './actions';

const initialState: GithubState = {
  userProfile: {
    loading: false,
    error: null,
    data: getStorage('token') || null,
  },
};

const github = createReducer<GithubState, GithubAction>(initialState, {
  [GET_USER_PROFILE]: state => ({
    ...state,
    userProfile: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [GET_USER_PROFILE_SUCCESS]: (state, action) => {
    setStorage('token', action.payload);
    return {
      ...state,
      userProfile: {
        loading: false,
        error: null,
        data: action.payload,
      },
    };
  },
  [GET_USER_PROFILE_ERROR]: (state, action) => ({
    ...state,
    userProfile: {
      loading: false,
      error: action.payload,
      data: null,
    },
  }),
});

export default github;
