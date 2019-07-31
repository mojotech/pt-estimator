import { combineReducers, createStore } from 'redux';
import { user } from './user';
import { project } from './project';
import { toggleStory } from './toggle-story-list';
import { story } from './story';

const reducers = combineReducers({
  user,
  project,
  toggleStory,
  story,
});

const store = createStore(reducers);
export default store;

export type ReduxState = ReturnType<typeof store.getState>;
