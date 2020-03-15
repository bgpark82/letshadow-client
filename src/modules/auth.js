import { takeLatest } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FROM = 'auth/INITIALIZE_FROM';
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN');

export const login = () => ({ type: LOGIN });
export const changeField = ({ name, value }) => ({
  type: CHANGE_FIELD,
  payload: { name, value },
});
export const initializeForm = form => ({ type: INITIALIZE_FROM });

const loginSaga = createRequestSaga(LOGIN, authAPI.check);

export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
}

const initialState = {
  username: '',
  password: '',
  auth: null,
  authError: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case INITIALIZE_FROM:
      return { ...state, initialState };
    case LOGIN_SUCCESS:
      return { ...state, authError: null, auth };
    case LOGIN_FAILURE:
      return { ...state, authError: action.payload.error };
    default:
      return state;
  }
};

export default auth;
