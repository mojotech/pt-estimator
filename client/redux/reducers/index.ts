import { combineReducers, createStore } from 'redux';
import { userReducer } from './user';
import { loginReducer } from './login';

const store = createStore(
  combineReducers({
    userReducer,
    loginReducer,
  })
);
export default store;

export type State = ReturnType<typeof store.getState>;
