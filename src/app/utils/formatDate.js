const dateFormat = require('dateformat');

/**
 * Function to format timestamp into a time/datetime
 *
 * @param {number} timetamp - Timestamp to format
 * @param {boolean} [showDate] - Whether or not a date should be displayed
 *
 * @returns {string}
 */

export default function formatDate(timestamp, showDate = false){
  const date = new Date(timestamp);
  return showDate ? dateFormat(date, "ddd, d mmm yyyy,   h:MM:ss Z") : dateFormat(date, "h:MM:ss");
}
