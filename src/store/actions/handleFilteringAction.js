import { HANDLE_FILTERING } from "./types";

export const handleFiltering = props => dispatch => {
  return dispatch({
    type: HANDLE_FILTERING,
    payload: props,
  });
};
