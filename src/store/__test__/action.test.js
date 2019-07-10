// @ts-check

import { fetching, fetchingError, fetchingSuccess } from "../actions"
import { ActionTypes } from "../actionType"

describe("Redux[action]", () => {
  it("should start fetching users action", () => {
    expect(fetching()).toEqual({ type: ActionTypes.FETCHING })
  })

  it("should return correct action type with users", () => {
    const users = []

    const type = fetchingSuccess(users)
    expect(type).toEqual({
      type: ActionTypes.FETCHING_SUCCESS,
      users
    })
  })
  it("should return correct action type with error", () => {
    const error = { message: "something went wrong!!!" }

    const type = fetchingError(error)
    expect(type).toEqual({
      type: ActionTypes.FETCHING_ERROR,
      error
    })
  })
})
