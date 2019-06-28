import { Login, loginActionType } from '../types';

const initialState: Login = {
  loggedIn: false,
};

export function loginReducer(
  state = initialState,
  action: loginActionType
): Login {
  switch (action.type) {
    case 'SET_LOGIN':
      return {
        loggedIn: action.login.loggedIn,
      };
    default:
      return state;
  }
}
