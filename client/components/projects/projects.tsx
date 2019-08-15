import { History } from 'history';
import React from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from 'urql';
import { ReduxState } from '~redux/reducers';

import EmptyState from '~components/projects/empty-state';
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
interface Props {
  history: History;
}

const Projects = ({ history }: Props) => {
  const currentProject = useSelector((state: ReduxState) => state.project);

  const [res] = useQuery({
    query: fetchProjects,
    variables: { filter: `label:"${process.env.PT_LABEL}"` },
  });

  if (res.fetching) {
    return <>Loading GraphQL...</>;
  } else if (res.error) {
    return <>GraphQL Error</>;
  }

  return (
    <>
      <NavBar projects={res.data.projects.all} stories={currentProject.stories} history={history} />
      {res.data.projects.all.length > 0 ? <Project /> : <EmptyState />}
    </>
  );
};

export default Projects;
