import { FETCH_POSTS, FETCH_QUOTES, FETCH_MUSIC } from "./types";

export const fetchPosts = () => dispatch => {
  fetch(`http://blog.local/wp-json/wp/v2/posts`)
    .then(response => response.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts,
      })
    );
};

export const fetchQuotes = () => dispatch => {
  fetch(`http://blog.local/wp-json/wp/v2/quote`)
    .then(response => response.json())
    .then(quotes =>
      dispatch({
        type: FETCH_QUOTES,
        payload: quotes,
      })
    );
};

export const fetchMusic = () => dispatch => {
  fetch(`http://blog.local/wp-json/wp/v2/music`)
    .then(response => response.json())
    .then(music =>
      dispatch({
        type: FETCH_MUSIC,
        payload: music,
      })
    );
};
