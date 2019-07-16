import { createStore } from 'redux';
import { user } from './user';

const store = createStore(user);
export default store;

export type ReduxState = ReturnType<typeof store.getState>;
