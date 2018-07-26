import { createAction } from 'redux-actions';

const types = {
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
  APP_INIT: 'APP_INIT',
  APP_EXIT: 'APP_EXIT',
  APP_API_REQUEST: 'APP_API_REQUEST',
  APP_API_SUCCESS: 'APP_API_SUCCESS',
  APP_API_FAILURE: 'APP_API_FAILURE',
  APP_API_CANCEL: 'APP_API_CANCEL',
  APP_SERVICE_START: 'APP_SERVICE_START',
  APP_SERVICE_DONE: 'APP_SERVICE_DONE',
  APP_SERVICE_ERROR: 'APP_SERVICE_ERROR',
  APP_SERVICE_CANCEL: 'APP_SERVICE_CANCEL',
  CLEAN_MESSAGE: 'CLEAN_MESSAGE',
};

export const ADD_TODO = createAction(types.ADD_TODO);
export const REMOVE_TODO = createAction(types.REMOVE_TODO);
export const APP_INIT = createAction(types.APP_INIT);
export const APP_EXIT = createAction(types.APP_EXIT);
export const APP_API_REQUEST = createAction(types.APP_API_REQUEST);
export const APP_API_SUCCESS = createAction(types.APP_API_SUCCESS);
export const APP_API_FAILURE = createAction(types.APP_API_FAILURE);
export const APP_API_CANCEL = createAction(types.APP_API_CANCEL);
export const APP_SERVICE_START = createAction(types.APP_SERVICE_START);
export const APP_SERVICE_DONE = createAction(types.APP_SERVICE_DONE);
export const APP_SERVICE_ERROR = createAction(types.APP_SERVICE_ERROR);
export const APP_SERVICE_CANCEL = createAction(types.APP_SERVICE_CANCEL);
export const CLEAN_MESSAGE = createAction(types.CLEAN_MESSAGE);

export default types;
