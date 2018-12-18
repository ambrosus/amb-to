/* global console */

/**
 * Remove all duplicates elements from an array
 *
 * @param {array} array - Array of elements to filter
 * @param {string} key - Element's key to filter by
 *
 * @returns {array}
 */

export default function removeArrayDuplicates(array, key = '_id') {
    const ids = [];
    return array.filter((item) => {
        if (ids.indexOf(item[key]) < 0) {
            ids.push(item[key]);
            return item;
        } else {
            console.warn(`Duplicate found in an array: `, item[key]);
            return false;
        }
    });
}
