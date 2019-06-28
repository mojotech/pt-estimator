import React from 'react';
import { connect } from 'react-redux';

import { State } from '../redux/reducers';
import { User, Login } from '../redux/types';
import OAuth from '~components/oauth';

interface Props {
  login: Login;
  user: User;
}

function OAuthFailure(props: Props) {
  return props.login.attempts < 3 ? (
    <>
      <>Wrong credentials, try again</>
      <OAuth />
    </>
  ) : (
    <>Too many wrong attempts. Try later.</>
  );
}

const mapStateToProps = function(state: State) {
  return {
    login: state.loginReducer,
  };
};

export default connect(mapStateToProps)(OAuthFailure);
