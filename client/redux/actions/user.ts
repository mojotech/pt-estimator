import { User, SET_USER, setUserActionType } from '../types';

export function setUser(newUser: User): setUserActionType {
  return {
    type: SET_USER,
    profile: newUser,
  };
}
