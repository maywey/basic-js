const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  const names = Array.isArray(members) ? members.filter(elem => typeof (elem) === 'string') : [];

  if (names !== []) {
    let res = [];
    names.forEach(name => res.push(name.trim()[0].toUpperCase()));
    return res.sort().join('');
  }
  return false;
};
