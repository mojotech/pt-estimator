export interface User {
  id: string;
  email: string;
  name: string;
  firstName: string;
  lastName: string;
  imgUrl: string;
  apiToken: string;
}

export interface Login {
  loggedIn: boolean;
  attempts: number;
}

export enum UserType {
  SET_USER = 'SET_USER',
  SET_TOKEN = 'SET_TOKEN',
}

export enum LoginType {
  SET_LOGIN = 'SET_LOGIN',
  ADD_ATTEMPT = 'ADD_ATTEMPT',
}

export interface setUserActionType {
  type: typeof UserType.SET_USER;
  profile: User;
}

export interface setTokenActionType {
  type: typeof UserType.SET_TOKEN;
  profile: User;
}

export interface loginActionType {
  type: typeof LoginType.SET_LOGIN;
  login: Login;
}

export interface addAttemptActionType {
  type: typeof LoginType.ADD_ATTEMPT;
}

export type ActionTypes =
  | addAttemptActionType
  | loginActionType
  | setTokenActionType
  | setUserActionType;
