export const getAllPeople = (url) => {
    const URL = url + "/people";
    return fetch(url);
}

export const getPeopleInfo = (url, uid) => {
    const URL = url+"/people";
    return fetch(`${URL}${uid}`);
}

export const getAllPlanets = (url) => {
    const URL = url + "/planets";
    return fetch(url);
}

export const getAllVehicles = (url) => {
    const URL = url + "/vehicles";
    return fetch(url);
}