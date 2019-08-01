import { combineReducers, createStore } from 'redux';
import { project } from './project';
import { user } from './user';

const reducers = combineReducers({
  user,
  project,
});

const store = createStore(reducers);
export default store;

export type ReduxState = ReturnType<typeof store.getState>;
