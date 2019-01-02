/**
 * Function to convert a unix timestamp into "time ago" format.
 *
 * @param {number} date - Unix timestamp
 *
 * @returns {string}
 */

export default function timeSince(date) {

  let seconds = Math.floor((new Date() - date) / 1000);
  let interval = Math.floor(seconds / 31536000);

  if (interval >= 1) {
    return interval + " year" + (interval > 1 ? 's' : '');
  }
  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) {
    return interval + " month" + (interval > 1 ? 's' : '');
  }
  interval = Math.floor(seconds / 86400);
  if (interval >= 1) {
    return interval + " day" + (interval > 1 ? 's' : '');
  }
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) {
    return interval + " hour" + (interval > 1 ? 's' : '');
  }
  interval = Math.floor(seconds / 60);
  if (interval >= 1) {
    return interval + " minute" + (interval > 1 ? 's' : '');
  }
  return Math.floor(seconds) + " second" + (seconds > 1 ? 's' : '');
}
