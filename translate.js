const translate = require("translate-google");

const translateTweet = (str, lang) => {
  const tagRe = /\@\w+/g;
  const original_tags = str.match(tagRe);
  const cleanStr = str.replace(tagRe, "");
  return translate(cleanStr, { to: lang })
    .then((res) =>
      original_tags && original_tags.length > 0
        ? `${res} ${original_tags.join(" ")}`
        : res
    )
    .catch((err) => err);
};

module.exports.translateTweet = translateTweet;
