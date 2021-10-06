import produce from 'immer';
import { PROGRAM_SELECTED } from './constants';

// The initial state of the App
export const initialState = {
  programId: 0,
};

/* eslint-disable default-case, no-param-reassign */
const programReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case PROGRAM_SELECTED:
        draft.programId = action.programId;
        break;
    }
  });

export default programReducer;
