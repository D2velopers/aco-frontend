const makeAsyncActions = actionName => ({
  REQUEST: `${actionName}/REQUEST`,
  SUCCESS: `${actionName}/SUCCESS`,
  FAILURE: `${actionName}/FAILURE`,
});
const makeActionCreator = actionType => {
  return payload => ({ type: actionType, payload });
};
const makeAsyncActionCreator = actions => {
  const actionCreator = {
    request: makeActionCreator(actions.REQUEST),
    success: makeActionCreator(actions.SUCCESS),
    failure: makeActionCreator(actions.FAILURE),
  };
  return actionCreator;
};

// Action Types
export const types = {
  AUTH_LOGIN: makeAsyncActions('AUTH_LOGIN'),
  SEARCH_RANDOM_IMG: makeAsyncActions('SEARCH_RANDOM_IMG'),
};
// Action Creators
export default {
  authLogin: makeAsyncActionCreator(types.AUTH_LOGIN),
  searchRandomImg: makeAsyncActionCreator(types.SEARCH_RANDOM_IMG),
};
