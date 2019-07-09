import { User, ActionTypes } from '../types';

const initialState: User = {
  id: '',
  email: '',
  name: '',
  firstName: '',
  lastName: '',
  imgUrl: '',
  apiToken: '',
};

export function userReducer(state = initialState, action: ActionTypes): User {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...action.profile,
        apiToken: initialState.apiToken,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        apiToken: action.profile.apiToken,
      };
    default:
      return state;
  }
}
