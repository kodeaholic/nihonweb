/**
 * Gets the repositories of the user from Github
 */

import { put, select, takeLatest } from 'redux-saga/effects';
// import request from 'utils/request';
import { makeSelectProgramId } from './selectors';
// import { programSelected } from './actions';
import { PROGRAM_SELECTED, PROGRAM_TYPES } from './constants';

/**
 * Github repos request/response handler
 */
export function* doAction() {
  // Select username from store
  const programId = yield select(makeSelectProgramId());

  // eslint-disable-next-line no-console
  yield put(console.log(PROGRAM_TYPES[programId]));
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* rootAction() {
  // Watches for PROGRAM_SELECTED actions and calls doAction when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(PROGRAM_SELECTED, doAction);
}
