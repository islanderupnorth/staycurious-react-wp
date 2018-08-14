import { FETCH_POSTS } from "../actions/types.js";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}