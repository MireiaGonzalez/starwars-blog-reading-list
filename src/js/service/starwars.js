export const getAll = (url) => {
    return fetch(url);
}

export const getInfo = (url, uid) => {
    return fetch(`${url}/${uid}`);
}