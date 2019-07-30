import { createStore, combineReducers } from 'redux';
import { user } from './user';
import { project } from './project';

const reducers = combineReducers({
  user,
  project,
});

const store = createStore(reducers);
export default store;

export type ReduxState = ReturnType<typeof store.getState>;
