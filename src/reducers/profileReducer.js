import {
    FETCH_REPO_ERROR,
    FETCH_REPO_SUCCESS,
    USER_DETAILS_ERROR,
    USER_DETAILS_SUCCESS
} from '../actions/profileActions';
import profileInitState from './initialStates/profileStates';

export default function profileReducer(state = profileInitState, action = {}) {
    switch (action.type) {
        case FETCH_REPO_SUCCESS:
            return {
                ...state,
                repoList: action.payload,
                loadingRepo: false
            };
        case FETCH_REPO_ERROR:
            return {
                ...state,
                loadingRepo: false
            };
        case USER_DETAILS_SUCCESS:
            return {
                ...state,
                userDetails: action.payload,
                loadingUser: false
            };
        case USER_DETAILS_ERROR:
            return {
                ...state,
                loadingUser: false
            };
        default:
            return state;
    }
}