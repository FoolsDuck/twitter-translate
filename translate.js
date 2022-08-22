const translate = require("translate-google");

const translateTweet = (str, lang) => {
  return translate(str, { to: lang })
    .then((res) => res)
    .catch((err) => err);
};

module.exports.translateTweet = translateTweet;
