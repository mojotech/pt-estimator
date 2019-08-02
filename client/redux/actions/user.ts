interface Jwt {
  email: string;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  loggedIn: boolean;
}

export const setUser = (newUserResponse: Jwt) =>
  ({
    type: 'SET_USER',
    token: newUserResponse,
  } as const);
