import React from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from 'urql';
import { ReduxState } from '~redux/reducers';

import NavBar from '~components/projects/nav-bar';
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
        name
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
          labels {
            id
            name
          }
          estimate
        }
      }
    }
  }
}`;

const Projects = () => {
  const currentProject = useSelector((state: ReduxState) => state.project);

  const [res] = useQuery({
    query: fetchProjects,
    variables: { filter: 'label:"needs-review"' },
  });

  if (res.fetching) {
    return <>Loading GraphQL...</>;
  } else if (res.error) {
    // tslint:disable-next-line no-console
    console.error(res.error);
    return <>GraphQL Error</>;
  }

  return (
    <>
      <NavBar projects={res.data.projects.all} />
      <Project key={currentProject.id} data={currentProject} />
    </>
  );
};

export default Projects;
