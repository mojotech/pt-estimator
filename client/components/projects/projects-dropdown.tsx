import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import dropDown from '~assets/images/dropDown.svg';
import * as Types from '~components/projects/types';
import { colors, fontSizes } from '~lib/theme';
import { setProject } from '~redux/actions/project';

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
    dispatch(setProject(projects.find(pr => pr.id === event.target.value)));
  };

  useEffect(() => {
    dispatch(setProject(projects[0]));
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
