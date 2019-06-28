import * as store from '~/store';

const num = 123;

export const increment = () => <const>({
  type: 'counter/update',
  delta: 1
});

export const decrement = () => <const>({
  type: 'counter/update',
  delta: -1
});

const initialState = 0;

export const reducer = (state = initialState, action: store.Action) => {
  switch (action.type) {
    case 'counter/update':
      return state + action.delta;
    default:
      return state;
  }
};

export type Action = ReturnType<typeof increment | typeof decrement>;
export type State = ReturnType<typeof reducer>;
