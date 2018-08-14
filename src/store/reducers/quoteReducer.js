import { FETCH_QUOTES } from "../actions/types.js";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUOTES:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}
