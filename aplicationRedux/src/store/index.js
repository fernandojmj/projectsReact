import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import sagas from './sagas';

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

// const composer = process.env.NODE_ENV === 'development'
//   ? compose(applyMiddleware(...middlewares))
//   : applyMiddleware(...middlewares);

// const store = (reducer, composer);

const store = createStore(reducer, compose(applyMiddleware(...middlewares)));

sagaMiddleware.run(sagas);

export default store;
