import React from 'react';
import { useQuery } from 'urql';

import * as Types from '~components/projects/types';
import Project from '~components/projects/project';

const fetchProjects = `query FetchProjects($filter: String!) {
  projects(filter: $filter) {
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

const Projects = () => {
  const [res] = useQuery({
    query: fetchProjects,
    variables: { filter: 'label:"needs-review"' },
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
