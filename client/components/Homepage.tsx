import { History } from 'history';
import React, { useEffect } from 'react';
import { useStore } from 'react-redux';
import Projects from '~components/projects/projects';

interface Props {
  history: History;
}

const Homepage = ({ history }: Props) => {
  const store = useStore();
  const state = store.getState();

  useEffect(() => {
    if (!state.user.loggedIn) {
      history.push('/');
    }
  });

  if (state.user.loggedIn) {
    return <Projects history={history} />;
  }
  return <>Loading...</>;
};

export default Homepage;
