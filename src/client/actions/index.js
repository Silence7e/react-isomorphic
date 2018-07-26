import { createAction } from 'redux-actions';

const types = {
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
};

export const ADD_TODO = createAction(types.ADD_TODO);
export const REMOVE_TODO = createAction(types.REMOVE_TODO);

export default types;
