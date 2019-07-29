import { History } from 'history';
import React from 'react';
import { useStore } from 'react-redux';
import Projects from '~components/projects/projects';

interface Props {
  history: History;
}

const Homepage = ({ history }: Props) => {
  const store = useStore();
  const state = store.getState();
  if (state.user.loggedIn) {
    return <Projects />;
  }
  return <>{history.push('/')}</>;
};

export default Homepage;
