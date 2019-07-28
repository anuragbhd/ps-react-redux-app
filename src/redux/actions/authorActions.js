import * as types from "./actionTypes";
import * as authorAPI from "../../api/authorApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadAuthors() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return authorAPI
      .getAuthors()
      .then(authors => {
        dispatch({ type: types.LOAD_AUTHORS_SUCCESS, authors });
      })
      .catch(error => {
        dispatch(apiCallError());
        throw error;
      });
  };
}
