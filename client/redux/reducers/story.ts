import { Story } from '~components/projects/types';

interface StoryAction {
  type: 'SET_STORY';
  story: Story;
  storyPosition: number;
}

const initialState = {
  story: {
    comments: null,
    description: null,
    estimate: null,
    id: null,
    name: null,
    storyType: null,
    tasks: null,
    labels: null,
    userEstimates: null,
  },
  storyPosition: null,
};

export const story = (state = initialState, action: StoryAction) => {
  switch (action.type) {
    case 'SET_STORY':
      return {
        ...state,
        story: { ...action.story },
        storyPosition: action.storyPosition,
      };
    default:
      return state;
  }
};
