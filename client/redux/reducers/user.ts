import { User, SET_USER, setUserActionType } from '../types';

const initialState: User = {
  id: '',
  email: '',
  name: '',
  firstName: '',
  lastName: '',
  imageUrl: '',
};

export function userReducer(state = initialState, action: setUserActionType): User {
  switch (action.type) {
    case 'SET_USER':
      return {
        id: action.profile.id,
        email: action.profile.email,
        name: action.profile.name,
        firstName: action.profile.firstName,
        lastName: action.profile.lastName,
        imageUrl: action.profile.imageUrl,
      };
    default:
      return state;
  }
}
