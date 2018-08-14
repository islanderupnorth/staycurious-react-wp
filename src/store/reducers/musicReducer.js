import { FETCH_MUSIC } from "../actions/types.js";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_MUSIC:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}
