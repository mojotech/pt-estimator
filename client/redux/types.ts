export interface User {
  id: string;
  email: string;
  name: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
}

export interface Login {
  loggedIn: boolean;
}

export const SET_USER = 'SET_USER';
export const SET_LOGIN = 'SET_LOGIN';

export enum LoginType {
  SET_LOGIN = 'SET_LOGIN',
  ADD_ATTEMPT = 'ADD_ATTEMPT',
}

export interface setUserActionType {
  type: typeof SET_USER;
  profile: User;
}

export interface loginActionType {
  type: typeof SET_LOGIN;
  login: Login;
}
