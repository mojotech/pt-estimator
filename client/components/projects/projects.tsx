import React from 'react';
import { useQuery } from 'urql';

import * as Types from '~components/projects/types';
import Project from '~components/projects/project';

const fetchProjects = `query FetchProjects($token: String!, $filter: String!) {
  projects(token: $token, filter: $filter) {
    ... on Error {
      code
      error
      kind
      possibleFix
    }
    ... on ProjectCollection {
      all {
        id
        stories {
          id
          name
          description
          storyType
          comments {
            id
            createdAt
            personId
            text
          }
          tasks {
            id
            description
            complete
          }
          estimate
        }
      }
    }
  }
}`;

interface Props {
  token: String;
}

const Projects = ({ token }: Props) => {
  const [res] = useQuery({
    query: fetchProjects,
    variables: { token, filter: 'label:"needs-review"' },
  });

  if (res.fetching) {
    return <>Loading GraphQL...</>;
  } else if (res.error) {
    return <>GraphQL Error</>;
  }

  return res.data.projects.all.map((project: Types.Project) => {
    return <Project key={project.id} data={project} />;
  });
};

export default Projects;
