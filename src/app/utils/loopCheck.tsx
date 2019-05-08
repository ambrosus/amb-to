/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
/**
 * Filter out objects from list
 *
 * @param {Array} items
 * @param {Array} filter
 *
 * @returns {Array}
 */
export const loopExclude = (items: any[], filter: any[]): any[] => {
  if (!items || !filter) {
    return items;
  }
  return Object.entries(items).filter(([key, value]) => {
    if (filter.indexOf(key) < 0) {
      return { key: value };
    }
  });
};

/**
 * Returns filtered list
 *
 * @param {Array} items
 * @param {Array} filter
 *
 * @returns {Array}
 */
export const loopInclude = (items: any[], filter: any[]): any[] => {
  if (!items || !filter) {
    return items;
  }
  return Object.entries(items).filter(([key, value]) => {
    if (filter.indexOf(key) > -1) {
      return { key, value };
    }
  });
};
