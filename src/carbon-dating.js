const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let copySampleActivity = Number(sampleActivity),
      result = 0,
      counter = 0;
  if ((typeof sampleActivity === 'string') && (!isNaN(copySampleActivity)) && !(copySampleActivity <= 0) && !(copySampleActivity >=15)) {
      counter = Math.log(MODERN_ACTIVITY / sampleActivity) / Math.log(2)
      result = Math.ceil(counter * HALF_LIFE_PERIOD)
      return result
  } else {
      return false
  }
};