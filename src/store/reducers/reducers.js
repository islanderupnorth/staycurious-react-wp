import { combineReducers } from "redux";
import postReducer from "./postReducer.js";
import quoteReducer from "./quoteReducer.js";
import musicReducer from "./musicReducer.js";
import activePostReducer from "./activePostReducer";
import handleFilteringReducer from "./handleFilteringReducer.js";

export default combineReducers({
  posts: postReducer,
  quotes: quoteReducer,
  music: musicReducer,
  activePost: activePostReducer,
  filter: handleFilteringReducer,
});
