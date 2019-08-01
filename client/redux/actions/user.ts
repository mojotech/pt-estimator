import { GoogleLoginResponse } from 'react-google-login';

export const setUser = (newUserResponse: GoogleLoginResponse) =>
  ({
    type: 'SET_USER',
    response: newUserResponse,
  } as const);
