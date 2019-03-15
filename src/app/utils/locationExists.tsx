/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
/**
 * Check of location object exists
 *
 * @param {any} event
 *
 * @returns {boolean}
 */
const locationExists = (event: any): boolean => {
  const flag = checkCordinates(event);
  try {
    return flag && Array.isArray(event.location.location.geometry.coordinates) && event.location.location.geometry.coordinates.length === 2;
  } catch (error) {
      return false;
  }
};

const checkCordinates = (event: any): boolean => {
    try {
        let tempEvent = event;
        const args = 'event.location.location.geometry.coordinates'.split('.').splice(1);
        if (event && event.location) {
          args.forEach((val, index) => {
            if (!tempEvent || !tempEvent.hasOwnProperty(args[index])) {
              return false;
            }
            tempEvent = tempEvent[args[index]];
          });
          return true;
        }
        return false;
    } catch (error) {
        return false;
    }
};

export default locationExists;
