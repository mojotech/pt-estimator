import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import * as Types from '~components/projects/types';
import { colors, fonts, fontSizes } from '~lib/theme';
import { setProject } from '~redux/actions/project';
import { setStory } from '~redux/actions/story';

const Rectangle = styled.button`
  width: 320px;
  height: 57px;
  outline: none;
  background-color: ${colors.charcoal};
  :hover {
    background-color: ${colors.warmGrey};
  }
`;

const RectangleText = styled.div`
  font-family: ${fonts.neueHass};
  font-size: ${fontSizes.small};
  line-height: 1.29;
  color: ${colors.white};
  text-align: left;
  margin-left: 24px;
`;

const Column = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 15;
`;

const Divider = styled.div`
  position: absolute;
  left: 24px
  margin-top: 18px;
  width: 296px;
  height: 1px;
  opacity: 0.2;
  background-color: ${colors.white};
`;

interface Props {
  projects: Types.Project[];
}

const ProjectsDropdown = ({ projects }: Props) => {
  const dispatch = useDispatch();

  const onClick = event => {
    event.preventDefault();
    const newProject = projects.find(pr => pr.id === event.currentTarget.id);
    dispatch(setProject(newProject));
    dispatch(setStory(newProject.stories[0], 1));
  };

  useEffect(() => {
    dispatch(setProject(projects[0]));
    dispatch(setStory(projects[0].stories[0], 1));
  }, []);

  return (
    <Column>
    {projects.map((project, index) => {
      const projectId = project.id.toString(10);
        return (
          <Rectangle key={project.id} id={projectId} onClick={onClick}>
            <RectangleText> {project.name} </RectangleText>
            {index !== projects.length - 1 && <Divider />}
          </Rectangle>
        );
      })}
    </Column>
  );
};

export default ProjectsDropdown;
