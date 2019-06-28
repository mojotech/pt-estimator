import { Login, ActionTypes } from '../types';

const initialState: Login = {
  loggedIn: false,
  attempts: 0,
};

export function loginReducer(state = initialState, action: ActionTypes): Login {
  switch (action.type) {
    case 'SET_LOGIN':
      return {
        loggedIn: action.login.loggedIn,
        attempts: action.login.attempts,
      };
    case 'ADD_ATTEMPT':
      return {
        loggedIn: state.loggedIn,
        attempts: state.attempts + 1,
      };
    default:
      return state;
  }
}
