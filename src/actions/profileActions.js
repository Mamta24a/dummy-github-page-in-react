import * as link from '../api/apiLinks';
import { fetchApi } from '../api/apiHelper';

export const FETCH_REPO_ERROR = 'profile:fetchRepoError';
export const FETCH_REPO_SUCCESS = 'profile:fetchRepoSuccess';
export const USER_DETAILS_ERROR = 'profile:userDetailError';
export const USER_DETAILS_SUCCESS = 'profile:userDetailSuccess';

export function fetchRepoListError(errorMessage) {
    return {
        type: FETCH_REPO_ERROR,
        payload: errorMessage
    }
}

export function fetchRepoListSuccess(res) {
    return {
        type: FETCH_REPO_SUCCESS,
        payload: res
    }
}

export function fetchUserDetailsError(errorMessage) {
    return {
        type: USER_DETAILS_ERROR,
        payload: errorMessage
    }
}

export function fetchUserDetailsSuccess(res) {
    return {
        type: USER_DETAILS_SUCCESS,
        payload: res
    }
}

export function userRepoListApi(userHandle) {
    return dispatch => {
        const apiUrl = link.getUserRepoListLink(userHandle);
        fetchApi(apiUrl, "GET")
            .then(([response, json]) => {
                response.status === 200 && dispatch(fetchRepoListSuccess(json))
            })
            .catch(err => {
                console.error(err);
                dispatch(fetchRepoListError(err))
            });
    }
}

export function userDetailsApi(userHandle) {
    return dispatch => {
        const apiUrl = link.getUserDetailsLink(userHandle);
        fetchApi(apiUrl, "GET")
            .then(([response, json]) => {
                response.status === 200 && dispatch(fetchUserDetailsSuccess(json))
            })
            .catch(err => {
                console.error(err);
                dispatch(fetchUserDetailsError(err))
            });
    }
}