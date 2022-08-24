const rwClient = require("./twitterClient.js");

const getTweetById = async (id) => {
  try {
    const res = await rwClient.v1.singleTweet(id);
    return res;
  } catch (err) {
    console.error(err);
  }
};

const reply = async (id, txt) => {
  try {
    await rwClient.v1.reply(txt, id);
  } catch (err) {
    console.error(err);
  }
};

module.exports.reply = reply;
module.exports.getTweetById = getTweetById;
