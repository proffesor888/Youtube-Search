import {applyMiddleware, createStore} from 'redux';
import {VideoMas} from './reducers/';
import logger from 'redux-logger';

export default createStore(VideoMas, applyMiddleware(logger));