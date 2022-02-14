const URL = "https://www.swapi.tech/api";

export const getAllPeople = () => {
    const url = URL + "/people";
    return fetch(url);
}

export const getPeopleInfo = (uid) => {
    const url = URL+"/people";
    return fetch(`${url}${uid}`);
}

export const getAllPlanets = () => {
    const url = URL + "/planets";
    return fetch(url);
}

export const getAllVehicles = () => {
    const url = URL + "/vehicles";
    return fetch(url);
}