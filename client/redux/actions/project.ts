import { Project } from '~components/projects/types';

export const setProject = (newProject: Project) =>
  ({
    type: 'SET_PROJECT',
    project: newProject,
  } as const);
