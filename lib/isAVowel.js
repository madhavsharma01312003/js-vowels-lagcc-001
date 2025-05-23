'use strict';

var isAVowel = function(lttr) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.includes(lttr.toLowerCase());
};

module.exports = isAVowel;
