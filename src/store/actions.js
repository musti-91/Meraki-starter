/* jshint ignore:start */
// @flow
import { ActionTypes } from "./actionType";
export const fetching = () => ({
  type: ActionTypes.FETCHING
});

export const fetchingSuccess = (users: []) => ({
  type: ActionTypes.FETCHING_SUCCESS,
  users
});
export const fetchingError = (error: any) => ({
  type: ActionTypes.FETCHING_ERROR,
  error
});
export const changeLang = () => ({
  type: ActionTypes.CHANGE_LANG
});
/* jshint ignore:end */
