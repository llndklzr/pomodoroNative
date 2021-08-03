import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import pomodoroReducer from './reducers';

const rootReducer = combineReducers({pomodoroReducer});

export const Store = createStore(rootReducer, applyMiddleware(thunk));
