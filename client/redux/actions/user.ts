import { User, ActionTypes, UserType } from '../types';
import store from '../reducers/index';

export function setUser(newUser: User): ActionTypes {
  return {
    type: UserType.SET_USER,
    profile: newUser,
  };
}

export function setToken(updatedToken: string): ActionTypes {
  let updatedUser = store.getState().userReducer;
  updatedUser.apiToken = updatedToken;
  return {
    type: UserType.SET_TOKEN,
    profile: updatedUser,
  };
}
