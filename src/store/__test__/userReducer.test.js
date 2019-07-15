/* jshint ignore:start */

import userReducer from "../userReducer";
import { ActionTypes } from "../actionType";

describe("UserReducer", () => {
  const state = {
    users: [],
    fetching: false,
    fetchingError: false
  };
  it("should return state with fetching", () => {
    const action = { type: ActionTypes.FETCHING };

    const newState = userReducer(state, action);

    expect(newState).toEqual({
      users: [],
      fetching: true,
      fetchingError: false
    });
  });
  it("should return state with users", () => {
    const action = {
      type: ActionTypes.FETCHING_SUCCESS,
      users: [{ id: 1, name: "some" }]
    };

    const newState = userReducer(state, action);

    expect(newState).toEqual({
      users: [{ id: 1, name: "some" }],
      fetching: false,
      fetchingError: false
    });
  });

  it("should return state with error", () => {
    const action = {
      type: ActionTypes.FETCHING_ERROR,
      error: { message: "Something went wrong!" }
    };

    const newState = userReducer(state, action);

    expect(newState).toEqual({
      users: [],
      fetching: false,
      fetchingError: { message: "Something went wrong!" }
    });
  });
});
/* jshint ignore:end */
