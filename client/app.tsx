import React from 'react';
import { useQuery } from 'urql';

interface Props {
  message: string;
}

const App: React.SFC<Props> = ({ message }) => {
  const [result] = useQuery({
    query: `{ testField }`,
  });
  const { data } = result;

  return <div>
    <p>{message}</p>
    <p>and...</p>
    {data && <p>{data.testField}</p>}
  </div>;
};

export default App;
