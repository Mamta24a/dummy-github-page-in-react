import { gitHubApiDomain } from "../Constants/urlConst";

export function getUserRepoListLink(userHandle) {
    return `${gitHubApiDomain}/users/${userHandle}/repos`;
}

export function getUserDetailsLink(userHandle) {
    return `${gitHubApiDomain}/users/${userHandle}`;
}