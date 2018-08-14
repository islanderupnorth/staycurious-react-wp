import { ACTIVE_POST } from "./types";

export const activePost = props => dispatch => {
  return dispatch({
    type: ACTIVE_POST,
    payload: props,
  });
};
