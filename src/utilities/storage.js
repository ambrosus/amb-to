/* global localStorage */

const get = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (error) {
        return localStorage.getItem(key) || null;
    }
};

const set = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
};

export default { set, get };