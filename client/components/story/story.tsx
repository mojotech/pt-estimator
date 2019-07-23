import React from 'react';
import styled from 'styled-components';
import Description from '~components/story/story-description';
import Tasks, { TaskType } from '~components/story/story-tasks';
import Details from '~components/story/story-details';
import { colors, fonts, fontSizes, spacing } from '~lib/theme';

const StoryWrapper = styled.div`
  padding-top: 138px;
  padding-left: 138px;
`;

const CommentTitle = styled.div`
  color: #363333;
  font-size: ${fontSizes.medium};
  margin-bottom: 5px;
  margin-left: ${spacing.xl};
`;

export const CommentDivider = () => (
  <svg width="100%" height="4" style={{ marginBottom: `${spacing.l}`, marginLeft: '83px' }}>
    <rect width="110" height="2" fill="#e1e1e1" />
  </svg>
);

const body =
  '1. Prevent an admin from deleting a property (with a nice error message) until the admin has either deleted all' +
  'tenants attached to the property, or reassigned the tenants to a different property.\n\n2. Remove tenants from the ' +
  'property at the time the property is deleted. I am not sure where the tenants should go at that time. Delete them?' +
  'Reassign them? Have them assigned to nothing, and when the admin goes to edit the tenant, force the admin to select' +
  ' a new property?';

const taskList: TaskType[] = [
  {
    completed: true,
    description: 'Backend: Create UnitAccessibility database schema',
  },
  {
    completed: false,
    description: 'Backend: Admin can edit UniteAccessiblities from the admin portal',
  },
  {
    completed: false,
    description: 'Backend: Tenant can get a list of their UniteAccessibilites in a date range',
  },
];

const Story = () => {
  return (
    <>
      <StoryWrapper>
        <Details />
        <Description text={body} />
        <Tasks tasks={taskList} />
        <CommentTitle>Comments (3)</CommentTitle>
        <CommentDivider />
      </StoryWrapper>
    </>
  );
};

export default Story;
