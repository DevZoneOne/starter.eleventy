const { DateTime } = require("luxon");

const htmlDateString = (dateObj) => {
  return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
};

exports.htmlDateString = htmlDateString;
