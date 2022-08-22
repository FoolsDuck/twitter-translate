const rwClient = require("./twitterClient.js");

const reply = async (id, txt) => {
  try {
    await rwClient.v1.reply(txt, id);
  } catch (err) {
    console.error(err);
  }
};

module.exports.reply = reply;
