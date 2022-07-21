import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import penderMiddleware from 'redux-pender';
import * as modules from './module';

const reducers = combineReducers(modules);
const middlewares = [penderMiddleware()];

const isDev = process.env.NODE_ENV === 'development';
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
//const devtools = window.devToolsExtension && window.devToolsExtension();
const composeEnhancers = devtools || compose;

const configure = (preloadedState) => createStore(reducers, preloadedState, composeEnhancers(
    applyMiddleware(...middlewares)
));

export default configure;
