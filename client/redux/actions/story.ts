import { Story } from '~components/projects/types';

export const setStory = (story: Story, storyPosition: number) =>
  ({
    type: 'SET_STORY',
    story,
    storyPosition,
  } as const);
