import { takeLatest } from 'redux-saga/effects';
import * as authApi from '../lib/api/auth';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';

const TEMP_SET_USER = 'user/TEMP_SET_USER';

const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes('user/CHECK');

export const tempSetUser = user => ({ type: TEMP_SET_USER, payload: user });
export const check = token => ({ type: CHECK, payload: token });

const checkSaga = createRequestSaga(CHECK, authApi.check);

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
}

const initialState = {
  user: null,
  checkError: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case TEMP_SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case CHECK_SUCCESS:
      return {
        ...state,
        user: action.payload,
        checkError: null,
      };
    case CHECK_FAILURE:
      return {
        ...state,
        user: null,
        checkError: action.payload.error,
      };
    default:
      return state;
  }
};

export default user;
