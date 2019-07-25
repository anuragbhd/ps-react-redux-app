import * as types from "./actionTypes";
import * as authorAPI from "../../api/authorApi";

export function loadAuthors() {
  return function(dispatch) {
    return authorAPI
      .getAuthors()
      .then(authors => {
        dispatch({ type: types.LOAD_AUTHORS_SUCCESS, authors });
      })
      .catch(error => {
        throw error;
      });
  };
}
