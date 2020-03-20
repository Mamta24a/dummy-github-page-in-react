export function fetchApi(apiUrl, method) {
    const header = {
        method: method,
    };
    return fetch(apiUrl, header)
        .then(response => Promise.all([response, response ? response.json() : {}]))
        .catch(err => {
            console.error(err);
        })
}