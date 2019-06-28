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
  attempts: number;
}

export const SET_USER = 'SET_USER';

export enum LoginType {
  SET_LOGIN = 'SET_LOGIN',
  ADD_ATTEMPT = 'ADD_ATTEMPT',
}

export interface setUserActionType {
  type: typeof SET_USER;
  profile: User;
}

export interface loginActionType {
  type: typeof LoginType.SET_LOGIN;
  login: Login;
}

export interface addAttemptActionType {
  type: typeof LoginType.ADD_ATTEMPT;
}

export type ActionTypes = addAttemptActionType | loginActionType;
