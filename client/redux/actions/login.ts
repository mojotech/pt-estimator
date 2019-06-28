import { Login, loginActionType, SET_LOGIN } from '../types';

export function setLogin(newLogin: Login): loginActionType {
  return {
    type: SET_LOGIN,
    login: newLogin,
  };
}
