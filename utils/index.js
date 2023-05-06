const { DateTime } = require('luxon');

module.exports = {
  format_date: (date) => {
    console.log(DateTime.fromISO(date).isValid);
    return DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_MED);
  },
  toUpperCase: (str) => str.toUpperCase(),
};