import { Login, ActionTypes, LoginType } from '../types';

export function setLogin(newLogin: Login): ActionTypes {
  return {
    type: LoginType.SET_LOGIN,
    login: newLogin,
  };
}

export function addAttempt(): ActionTypes {
  return {
    type: LoginType.ADD_ATTEMPT,
  };
}
