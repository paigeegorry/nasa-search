import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducers/nasaReducer';
import { promiseMiddleware } from 'promise-middleware-redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(promiseMiddleware)
  )
);
