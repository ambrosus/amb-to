/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
/**
 * Convert unix timestamp into "time ago" format.
 *
 * @param {number} date - Unix timestamp
 *
 * @returns {string}
 */

const timeSince = (date: number): string => {
  const seconds = Math.floor((new Date().getTime() - date) / 1000);
  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) {
    return `${interval} years`;
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return `${interval} months`;
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return `${interval} days`;
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return `${interval} hours`;
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return `${interval} minutes`;
  }
  return `${Math.floor(seconds)} seconds`;
};

export default timeSince;
