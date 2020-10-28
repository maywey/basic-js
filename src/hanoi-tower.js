const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let obg = {}
  obg.turns = (2 ** disksNumber) - 1
  obg.seconds = Math.floor(obg.turns  * 3600 / turnsSpeed)
  return obg
}