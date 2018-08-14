import { ACTIVE_POST } from "../actions/types.js";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case ACTIVE_POST:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}
