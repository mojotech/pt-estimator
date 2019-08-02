interface User {
  email: string;
  name: string;
  firstName: string;
  lastName: string;
  imgUrl: string;
  loggedIn: boolean;
}

interface UserAction {
  type: 'SET_USER';
  token: Jwt;
}
const initialState: User = {
  email: '',
  name: '',
  firstName: '',
  lastName: '',
  imgUrl: '',
  loggedIn: false,
};

interface Jwt {
  email: string;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  loggedIn: boolean;
}

export const user = (state: User = initialState, action: UserAction): User => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        email: action.token.email,
        name: action.token.name,
        firstName: action.token.given_name,
        lastName: action.token.family_name,
        imgUrl: action.token.picture,
        loggedIn: true,
      };
    default:
      return state;
  }
};
