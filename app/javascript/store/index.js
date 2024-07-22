// app/javascript/store/index.js
import { createStore, combineReducers, applyMiddleware  } from 'redux';
import homeReducer from '../reducers/homeReducer';
import todoReducer from '../reducers/todoReducer';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
  home: homeReducer,
  todos: todoReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
