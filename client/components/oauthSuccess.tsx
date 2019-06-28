import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { State } from '../redux/reducers';
import { User, Login } from '../redux/types';
import TokenPrompt from '~components/tokenPrompt';

interface Props {
  login: Login;
  user: User;
}

function OAuthSuccess(props: Props) {
  return props.login.loggedIn ? <TokenPrompt /> : <Redirect to="/failure" />;
}

const mapStateToProps = function(state: State) {
  return {
    login: state.loginReducer,
  };
};

export default connect(mapStateToProps)(OAuthSuccess);
