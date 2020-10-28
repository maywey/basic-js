const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, opt) {
  arr = [];
  for(let i = 0; i < (opt.repeatTimes || 1); i++) {
      arr[i] = String(str);
      if(opt.hasOwnProperty('addition')) {
          addArr = [];
          for(let j = 0; j < (opt.additionRepeatTimes || 1); j++) {
              addArr[j] = String(opt.addition);
          }
          arr[i] += addArr.join(opt.additionSeparator || '|');
      }
  }
  
  return arr.join(opt.separator || "+");
};