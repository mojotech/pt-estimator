import { GoogleLoginResponse } from 'react-google-login';

export const setUser = (newUserResponse: GoogleLoginResponse) =>
  <const>{
    type: 'SET_USER',
    response: newUserResponse,
  };
