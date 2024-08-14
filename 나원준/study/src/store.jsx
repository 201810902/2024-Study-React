
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware} from 'redux'
import rootReducer, {rootSaga} from "./middleWare/modules/reducer";
import { thunk } from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,applyMiddleware(logger,thunk,sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;