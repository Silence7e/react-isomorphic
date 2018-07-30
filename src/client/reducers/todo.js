import { handleActions } from 'redux-actions';
import types from 'actions/app';

export default handleActions({
  [types.ADD_TODO]: (state, action) => ({
    ...state,
    action,
  }),
  [types.APP_SERVICE_DONE]: (state, action) => {
    switch (action.payload.name) {
      case 'getTodo':
      case 'removeTodo': {
        return {
          ...state,
          list: action.payload.result.data,
        };
      }
      default: {
        return state;
      }
    }
  },
  [types.REMOVE_TODO]: (state, action) => ({
    ...state,
    action,
  }),
}, {
  list: [],
});
