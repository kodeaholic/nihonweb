import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectProgram = state => state.program || initialState;

const makeSelectProgramId = () =>
  createSelector(
    selectProgram,
    state => state.programId,
  );

export { selectProgram, makeSelectProgramId };
