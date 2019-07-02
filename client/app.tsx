import React from 'react';
import { useQuery } from 'urql';

const ServerTest = () => {
  const [result] = useQuery({
    query: `{ testField }`,
  });
  const { fetching, data } = result;

  if (fetching) {
    return <p>...loading</p>;
  }

  return <p>{data.testField}</p>
}

interface Props {
  message: string;
}

const App: React.SFC<Props> = ({ message }) => {
  return <div>
    <p>{message}</p>
    <p>and...</p>
    <ServerTest />
  </div>;
};

export default App;
