import { combineReducers } from "redux";

import todosReducer from "./todosSlice";
import visibilityFilterReducer from "./filtersSlice";

export default combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer
});
