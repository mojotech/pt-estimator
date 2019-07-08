import React from 'react';
import { Query } from 'urql';

const getUsers = `query getUsers {
  users {
    firstName
    imgUrl
  }
}`;

const Test: React.SFC = () => {
  return (
    <Query query={getUsers}>
      {({ fetching, data, error }) => {
        if (fetching) {
          return 'Loading...';
        } else if (error) {
          return 'Nope';
        }

        return (
          <ul>
            {data.users.map(({ id, firstName }) => (
              <li key={id}>{firstName}</li>
            ))}
          </ul>
        );
      }}
    </Query>
  );
};

export default Test;
