const translateTweet = require("./translate");
const { reply, getTweetById } = require("./actions");

const translateTest = async (txt, lang) => {
  const res = await translateTweet(txt, lang);
  console.log(res);
};

// translateTest(
//   "חושב שאתה גבר דוחף לך לינק בפרצוף שלך @topshorter_eth https://topshorter.com",
//   "en"
// );

const getTweetTest = async (id) => {
  const res = await getTweetById(id);
  console.log(res);
};

getTweetTest("1562416056538656769");
