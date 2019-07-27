/* jshint ignore:start */
// @flow
import {ActionTypes} from "./actionType";

interface iState {
    users: Object[],
    fetching: boolean,
    fetchingError: any,
    lang: string
}

const INITIAL_STATE: iState = {
    users: [],
    fetching: false,
    fetchingError: false,
    lang: "en"
};

type ActionType = {
    type: ActionTypes,
    [prop: string]: any
}

export default function userReducer(state: iState = INITIAL_STATE, action: ActionType) {
    switch (action.type) {
        case ActionTypes.FETCHING:
            state = {...state, fetching: true};
            break;
        case ActionTypes.FETCHING_SUCCESS:
            state = {...state, fetching: false, users: action.users};
            break;
        case ActionTypes.FETCHING_ERROR:
            state = {
                ...state,
                fetching: false,
                users: [],
                fetchingError: action.error
            };
            break;
        case ActionTypes.CHANGE_LANG:
            state = {...state, lang: state.lang === "en" ? "nl" : "en"};
            break;

        default:
            state = {...state};
    }

    return state;
}
/* jshint ignore:end */
