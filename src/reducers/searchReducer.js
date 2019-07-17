import produce from 'immer';
import { types } from '../actions';

const initialState = {
  randomImgs: {
    status: 'initial',
    data: [],
    error: '',
  },
};

export default (state = initialState, { type, payload }) => {
  const { SEARCH_RANDOM_IMG } = types;
  switch (type) {
    case SEARCH_RANDOM_IMG.REQUEST:
      return produce(state, ({ randomImgs }) => {
        randomImgs.status = 'pending';
      });
    case SEARCH_RANDOM_IMG.SUCCESS:
      return produce(state, ({ randomImgs }) => {
        randomImgs.status = 'success';
        if (state.randomImgs.data.length > 1)
          randomImgs.data = [{ ...payload }, state.randomImgs.data[0]];
        else randomImgs.data.unshift(payload);
      });
    case SEARCH_RANDOM_IMG.FAILURE:
      return produce(state, ({ randomImgs }) => {
        randomImgs.error = payload;
        randomImgs.status = 'failure';
      });
    default:
      return state;
  }
};
