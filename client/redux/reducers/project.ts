import { Project } from '~components/projects/types';

interface ProjectAction {
  type: 'SET_PROJECT';
  project: Project;
}

const initialState: Project = {
  id: null,
  name: '',
  stories: [],
};

export const project = (state: Project = initialState, action: ProjectAction): Project => {
  switch (action.type) {
    case 'SET_PROJECT':
      return {
        ...state,
        id: action.project.id,
        name: action.project.name,
        stories: action.project.stories,
      };
    default:
      return state;
  }
};
