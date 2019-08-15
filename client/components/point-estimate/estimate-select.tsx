import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation, useQuery } from 'urql';

import { Story } from '~components/projects/types';
import { Estimate } from '~components/projects/types';
import { ReduxState } from '~redux/reducers';

import { setStory } from '~redux/actions/story';

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
  story: Story;
}

const EstimateSelect = ({ story }: Props) => {
  const currentProject = useSelector((state: ReduxState) => state.project);
  const currentUser = useSelector((state: ReduxState) => state.user);
  const storyPosition = useSelector((state: ReduxState) => state.story.storyPosition);
  const dispatch = useDispatch();

  const [, executeMutation] = useMutation(addEstimate);

  const onChange = e => {
    const storyId = story.id;
    executeMutation({
      storyId,
      pointValue: parseInt(e.target.value, 10),
      userEmail: currentUser.email,
    });
    if (story.userEstimates.length) {
      story.userEstimates[0].pointValue = e.target.value;
      dispatch(setStory(story, storyPosition));
    }
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
  let userValue = '0';
  if (story.userEstimates.length) {
    userValue = story.userEstimates[0].pointValue.toString();
  }

  return (
    <select onChange={onChange} defaultValue={userValue}>
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
