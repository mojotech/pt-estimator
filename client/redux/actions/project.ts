import { Project } from '~components/projects/types';

export const setProject = (newProject: Project) =>
  <const>{
    type: 'SET_PROJECT',
    project: newProject,
  };
