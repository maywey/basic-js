const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  const cats = backyard.flat().filter(el => el === '^^');
  return cats.length;
};