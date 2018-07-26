import { combineReducers } from 'redux';

import todo from './todo';
import msg from './msg';

const app = combineReducers({
  todo,
  msg,
});
export default app;
