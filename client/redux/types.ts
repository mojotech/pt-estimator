export interface User {
  id: string;
  email: string;
  name: string;
  firstName: string;
  lastName: string;
  imageUrl: string;
}

export const SET_USER = 'SET_USER';

export interface setUserActionType {
  type: typeof SET_USER;
  profile: User;
}
