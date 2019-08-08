import produce from 'immer';
import { types } from '../actions';

const initialState = {
  banner: {
    status: 'initial',
    error: '',
    items: [],
  },
};

export default (state = initialState, { type, payload }) => {
  const { LOAD_EVENT_BANNER } = types;
  switch (type) {
    case LOAD_EVENT_BANNER.REQUEST:
      return produce(state, draft => {
        draft.banner.status = 'pending';
      });
    case LOAD_EVENT_BANNER.SUCCESS:
      return produce(state, draft => {
        draft.banner.status = 'success';
        draft.banner.items = payload.images;
      });
    case LOAD_EVENT_BANNER.FAILURE:
      return produce(state, draft => {
        draft.banner.status = 'failure';
        draft.banner.items = [];
        draft.banner.error = payload;
      });
    default:
      return state;
  }
};
