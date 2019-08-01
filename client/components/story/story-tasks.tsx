import React from 'react';
import styled from 'styled-components';
import { Task as TaskType } from '~components/projects/types';
import { colors, fontSizes, spacing } from '~lib/theme';

interface TitleProps {
  noTasks?: boolean;
}

const TaskTitle = styled.div<TitleProps>`
  font-size: ${fontSizes.large};
  color: ${colors.warmGrey};
  margin-bottom: 20px;
  opacity: ${props => (props.noTasks ? '0.5' : '1')};
`;

interface TaskDescripProps {
  completed: boolean;
}

const TaskDescrip = styled.li<TaskDescripProps>`
  font-size: ${fontSizes.medium};
  color: ${colors.warmGrey};
  font-weight: 400;
  line-height: 1.31;
  margin-bottom: 9px;
  padding-left: 8px;
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
`;

const TaskList = styled.ul`
  padding-left: 0px;
  margin-left: 8px;
  list-style-position: outside;
`;

const TaskWrapper = styled.div`
  margin-bottom: 48px;
  margin-left: ${spacing.xl};
`;

interface TasksProps {
  tasks: TaskType[];
}

const Tasks = ({ tasks }: TasksProps) => {
  return (
    <TaskWrapper>
      {tasks.length !== 0 ? (
        <>
          <TaskTitle>Tasks</TaskTitle>
          <TaskList>
            {tasks.map(task => (
              <TaskDescrip completed={task.complete}>{task.description}</TaskDescrip>
            ))}
          </TaskList>
        </>
      ) : (
        <TaskTitle noTasks>No tasks</TaskTitle>
      )}
    </TaskWrapper>
  );
};

export default Tasks;
