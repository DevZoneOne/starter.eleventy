const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");

const htmlDateString = (dateObj) => {
  return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
};

const readableDate = (dateObj, format, zone) => {
  return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(
    format || "dd LLLL yyyy"
  );
};

const head = (array, n) => {
  if (!Array.isArray(array) || array.length === 0) {
    return [];
  }
  if (n < 0) {
    return array.slice(n);
  }

  return array.slice(0, n);
};

const min = (...numbers) => {
  return Math.min.apply(null, numbers);
};

const md = (content = "") => {
  return markdownIt({ html: true }).render(content);
};

const filterTagList = (tags) => {
  return (tags || []).filter(
    (tag) => ["all", "nav", "post", "posts"].indexOf(tag) === -1
  );
};

module.exports = {
  filterTagList,
  head,
  htmlDateString,
  md,
  min,
  readableDate,
};
