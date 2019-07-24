import produce from 'immer';
import { types } from '../actions';

const initialState = {
  status: 'initial',
  logged: false,
  token: null,
  userInfo: {
    user_id: null,
    user_name: '',
  },
  error: '',
};

export default (state = initialState, { type, payload }) => {
  const { AUTH_LOGIN } = types;
  switch (type) {
    case AUTH_LOGIN.REQUEST:
      return produce(state, draft => {
        draft.status = 'pending';
      });
    case AUTH_LOGIN.SUCCESS:
      return produce(state, draft => {
        draft.status = 'success';
        draft.logged = true;
        draft.userInfo = payload.userInfo;
        localStorage.setItem('token', payload.userInfo.token);
      });
    case AUTH_LOGIN.FAILURE:
      return produce(state, draft => {
        draft.status = 'failure';
        draft.error = payload;
        draft.logged = false;
        draft.userInfo = {
          user_id: null,
          user_name: '',
        };
      });
    default:
      return state;
  }
};
