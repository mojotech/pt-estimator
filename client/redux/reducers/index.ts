import { combineReducers, createStore } from 'redux';
import { userReducer } from './user';

const store = createStore(
  combineReducers({
    userReducer,
  })
);
export default store;

export type State = ReturnType<typeof store.getState>;
