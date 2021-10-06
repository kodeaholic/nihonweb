import { PROGRAM_SELECTED } from './constants';

/**
 * @param  {string} programId The new value of program id. Integer
 *
 * @return {object} An action object with a type of PROGRAM_SELECTED
 */
export function programSelected(programId) {
  return {
    type: PROGRAM_SELECTED,
    programId,
  };
}
