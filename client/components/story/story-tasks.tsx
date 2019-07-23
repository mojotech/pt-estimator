import React from 'react';
import styled from 'styled-components';
import { colors, fonts, fontSizes, spacing } from '~lib/theme';

const TaskTitle = styled.div`
  font-size: ${fontSizes.large};
  color: ${colors.warmGrey};
  margin-bottom: 20px;
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

export type TaskType = {
  completed: boolean;
  description: string;
};

interface TasksProps {
  tasks: TaskType[];
}

const Tasks = ({ tasks }: TasksProps) => {
  return (
    <TaskWrapper>
      <TaskTitle>Tasks</TaskTitle>
      <ul>
        {tasks.map(task => (
          <TaskDescrip completed={task.completed}>{task.description}</TaskDescrip>
        ))}
      </ul>
    </TaskWrapper>
  );
};

export default Tasks;
