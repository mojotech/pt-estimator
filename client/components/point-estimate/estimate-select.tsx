import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { useMutation, useQuery } from 'urql';

import { ReduxState } from '~redux/reducers';

const getValidEstimates = `query GetValidEstimates($projectId: String!) {
  pointingSchema(projectId: $projectId) {
    ... on EstimateSchema {
      all
    }
    ... on DbError {
      message
    }
    ... on PtError {
      code
      error
      kind
      possibleFix
    }
  }
}`;

const addEstimate = `mutation AddStoryEstimate($storyId: String!, $pointValue: Int!, $userEmail: String!) {
  createEstimate(storyId: $storyId, pointValue: $pointValue, userEmail: $userEmail) {
    id
    pointValue
    userId
  }
}`;

interface Props {
  storyId: string;
}

const EstimateSelect = ({ storyId }: Props) => {
  const currentProject = useSelector((state: ReduxState) => state.project);
  const currentUser = useSelector((state: ReduxState) => state.user);

  const [, executeMutation] = useMutation(addEstimate);

  const onChange = e => {
    executeMutation({
      storyId,
      pointValue: parseInt(e.target.value, 10),
      userEmail: currentUser.email,
    });
  };

  const [res] = useQuery({
    query: getValidEstimates,
    variables: { projectId: currentProject.id },
  });

  if (res.fetching) {
    return <>Loading GraphQL...</>;
  } else if (res.error) {
    return <>GraphQL Error</>;
  }

  return (
    <select onChange={onChange}>
      {res.data.pointingSchema.all.map((value: number) => {
        return (
          <option key={value} value={value}>
            {value}
          </option>
        );
      })}
    </select>
  );
};

export default EstimateSelect;
