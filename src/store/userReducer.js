// @ts-check
import { ActionTypes } from "./actionType"

const INITIAL_STATE = {
  users: [],
  fetching: false,
  fetchingError: false,
  // lang
  lang: "en"
}

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.FETCHING:
      state = { ...state, fetching: true }
      break
    case ActionTypes.FETCHING_SUCCESS:
      state = { ...state, fetching: false, users: action.users }
      break
    case ActionTypes.FETCHING_ERROR:
      state = { ...state, fetching: false, users: [], fetchingError: action.error }
      break
    case ActionTypes.CHANGE_LANG:
      state = { ...state, lang: state.lang == "en" ? "nl" : "en" }
      break

    default:
      state = { ...state }
  }

  return state
}
