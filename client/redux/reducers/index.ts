import { combineReducers, createStore } from 'redux';
import { project } from './project';
import { story } from './story';
import { toggleStory } from './toggle-story-list';
import { user } from './user';

const reducers = combineReducers({
  user,
  project,
  toggleStory,
  story,
});

const store = createStore(reducers);
export default store;

export type ReduxState = ReturnType<typeof store.getState>;
