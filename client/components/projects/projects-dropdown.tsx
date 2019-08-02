import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import * as Types from '~components/projects/types';
import { colors, fontSizes } from '~lib/theme';
import { setProject } from '~redux/actions/project';
import { setStory } from '~redux/actions/story';

const ProjectSelect = styled.select`
  > img {
    padding: 10px 7px;
  }

  display: flex;
  color: ${colors.white};
  font-size: ${fontSizes.medium};
  font-family: GT America;
  align-items: center;
  justify-content: center;
  background: ${colors.charcoal};
  border: none;
  appearance: none;
  padding: 10px 7px;
  position: relative;
`;

interface Props {
  projects: Types.Project[];
}

const ProjectsDropdown = ({ projects }: Props) => {
  const dispatch = useDispatch();

  const onChange = event => {
    event.preventDefault();
    const newProject = projects.find(pr => pr.id === event.target.value);
    dispatch(setProject(newProject));
    dispatch(setStory(newProject.stories[0], 1));
  };

  useEffect(() => {
    dispatch(setProject(projects[0]));
    dispatch(setStory(projects[0].stories[0], 1));
  }, []);

  return (
    <ProjectSelect onChange={onChange}>
      {projects.map(project => {
        return (
          <option key={project.id} value={project.id}>
            {project.name}
          </option>
        );
      })}
    </ProjectSelect>
  );
};

export default ProjectsDropdown;
