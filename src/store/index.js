import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from '../reducers';
import rootSaga from '../sagas';

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
