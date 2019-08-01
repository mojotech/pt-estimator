import { GoogleLoginResponse } from 'react-google-login';

interface User {
  email: string;
  name: string;
  firstName: string;
  lastName: string;
  imgUrl: string;
}

interface UserAction {
  type: 'SET_USER';
  response: GoogleLoginResponse;
}

const initialState: User = {
  email: '',
  name: '',
  firstName: '',
  lastName: '',
  imgUrl: '',
};

export const user = (state: User = initialState, action: UserAction): User => {
  switch (action.type) {
    case 'SET_USER':
      const profile = action.response.getBasicProfile();
      return {
        ...state,
        email: profile.getEmail(),
        name: profile.getName(),
        firstName: profile.getGivenName(),
        lastName: profile.getFamilyName(),
        imgUrl: profile.getImageUrl(),
      };
    default:
      return state;
  }
};
