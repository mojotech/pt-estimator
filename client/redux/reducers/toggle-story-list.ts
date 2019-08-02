interface ToggleStoryListAction {
  type: 'TOGGLE_STORY_LIST';
  isVisible: boolean;
}

const initialState = {
  isVisible: false,
};

export const toggleStory = (state = initialState, action: ToggleStoryListAction) => {
  switch (action.type) {
    case 'TOGGLE_STORY_LIST':
      return {
        ...state,
        isVisible: !state.isVisible,
      };
    default:
      return state;
  }
};
