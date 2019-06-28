import { combineReducers, createStore } from 'redux';

import * as counter from '~/counter/store';

export type Action =
  counter.Action;

export type State = {
  counter: counter.State
};

export type Dispatch = (action: Action) => Action;

const reducer = combineReducers({
  counter: counter.reducer
});

const store = createStore(reducer);

export default store;
