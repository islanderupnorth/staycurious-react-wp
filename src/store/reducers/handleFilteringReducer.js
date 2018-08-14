import { HANDLE_FILTERING } from "../actions/types.js";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case HANDLE_FILTERING:
      return {
        ...state,
        choice: action.payload,
      };
    default:
      return state;
  }
}
