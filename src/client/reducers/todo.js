import { handleActions } from 'redux-actions';
import types from 'actions/app';

export default handleActions({
  [types.ADD_TODO]: (state, action) => ({
    ...state,
    action,
  }),
  [types.REMOVE_TODO]: (state, action) => ({
    ...state,
    action,
  }),
}, {});
