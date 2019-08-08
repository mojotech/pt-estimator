import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import * as Types from '~components/projects/types';
import { colors, fonts, fontSizes } from '~lib/theme';
import { setProject } from '~redux/actions/project';
import { setStory } from '~redux/actions/story';

import DropDown from '~assets/images/drop-down.svg';

const Rectangle = styled.button`
  width: 320px;
  height: 57px;
  outline: none;
  background-color: ${colors.charcoal};
  :hover {
    background-color: ${colors.warmGrey};
  }
`;

const ProjectText = styled.div`
  font-size: ${fontSizes.medium};
  font-family: ${fonts.neueHass};
  line-height: 1.31;
  color: #ffffff;
  margin-left: 24px;
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
  top: 57px;
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

const ProjectButton = styled.button`
  height: 57px;
  outline: none;
  background-color: ${colors.charcoal};
  :hover {
    background-color: ${colors.warmGrey};
  }
`;

const DropDownIcon = styled(DropDown)`
  width: 12px;
  height: 12px;
  margin-top: 7px;
  margin-left: 8px;
  margin-right: 28px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
`;

interface Props {
  projects: Types.Project[];
}

const ProjectsDropdown = ({ projects }: Props) => {
  const dispatch = useDispatch();
  const [isVisible, toggleVisibility] = useState(false);
  const [currentProjectName, setProjectName] = useState(projects[0].name);

  const onClick = event => {
    event.preventDefault();

    const newProject = projects.find(pr => pr.id === event.currentTarget.id);
    dispatch(setProject(newProject));
    dispatch(setStory(newProject.stories[0], 1));

    toggleVisibility(!isVisible);
    setProjectName(newProject.name);
  };

  return (
    <>
      <ProjectButton onClick={() => toggleVisibility(!isVisible)}>
        <Row>
          <ProjectText>{currentProjectName}</ProjectText>
          <DropDownIcon />
        </Row>
      </ProjectButton>
      {isVisible && (
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
      )}
    </>
  );
};

export default ProjectsDropdown;
