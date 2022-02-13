const URL = "https://www.swapi.tech/api";

export const getAllPeople = () => {
    const url = URL + "/people";
    return fetch(url);
}