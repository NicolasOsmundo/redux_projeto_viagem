import { createStore, applyMiddleware } from 'redux';
import CreateSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = CreateSagaMiddleware();

const enchacer = applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enchacer);

sagaMiddleware.run(rootSaga);

export default store;