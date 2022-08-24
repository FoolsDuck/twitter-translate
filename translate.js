const translate = require("translate-google");

const translateTweet = (str, lang) => {
  const tagRe = /\@\w+/g;
  const urlRe = new RegExp(
    "([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?"
  );
  // Change this to your own username otherwise you'll get looped:
  const original_url = str.match(urlRe);
  const original_tags = str.match(tagRe);
  let cleanStr = str;
  if (original_tags) {
    cleanStr = cleanStr.replace(tagRe, "");
  }

  if (original_url) {
    cleanStr = cleanStr.replace(urlRe, "");
  }
  return translate(cleanStr, { to: lang })
    .then((res) => {
      let translatedTxt = res;
      if (original_tags) {
        translatedTxt = `${translatedTxt} ${original_tags.join(" ")}`;
      }

      if (original_url) {
        translatedTxt = `${translatedTxt} ${original_url[0]}`;
      }

      return translatedTxt.substring(0, 280);
    })
    .catch((err) => err);
};

module.exports.translateTweet = translateTweet;
