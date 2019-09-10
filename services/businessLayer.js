var exported_constants = require('./../lib/constants')
module.exports = class BusinessLayer {



  constructor() {
    this.leven = require('leven');

    // this.VOWEL_CHAR = "%"
    // // this.CONSONENT_CHAR = "*"
    // // this.SPACE_CHAR = "/"
    // // this.OTHER_CHAR = "?"
    // this.vowels = ['A', 'E', 'I', 'O', 'U']
    // this.consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z']
  }

  characterSwitch(input) {
    let inputCharArray = input.split('');
    console.log(inputCharArray)
    let newString = ""
    for (let i = 0; i < inputCharArray.length; i++) {
      if (this.checkIfVowel(inputCharArray[i])) {
        newString += exported_constants.VOWEL_CHAR;
      }
      if (this.checkIfConsonant(inputCharArray[i])) {
        newString += exported_constants.CONSONENT_CHAR;
      }
      if (this.checkIfOtherChar(inputCharArray[i])) {
        newString += exported_constants.OTHER_CHAR;
      }
      if (this.checkIfSpace(inputCharArray[i])) {
        newString += exported_constants.SPACE_CHAR;
      }
    }

    return newString;
  }

  checkIfVowel(word) {
    for (let i = 0; i < exported_constants.VOWELS.length; i++) {
      if (exported_constants.VOWELS[i].toLocaleLowerCase() === word) {
        return true;
      }
    }
    return false;
  }

  checkIfConsonant(word) {
    for (let i = 0; i < exported_constants.CONSONANTS.length; i++) {
      if (exported_constants.CONSONANTS[i].toLocaleLowerCase() === word) {
        return true;
      }
    }
    return false;
  }

  checkIfSpace(word) {
    if (exported_constants.SPACE === word) {
      return true;
    }
    return false;
  }

  checkIfOtherChar(word) {
    for (let i = 0; i < exported_constants.OTHER.length; i++) {
      if (exported_constants.OTHER[i] === word) {
        return true;
      }
    }
    return false;
  }

  wordDifference(first_word, second_word) {
    let difference = this.leven(first_word.toLowerCase(), second_word.toLowerCase());
    let longest = Math.max(first_word.length, second_word.length);
    return (longest - difference) / longest;
  }

  getData(url, request) {

    var options = {
      url: url,
      headers: {
        'User-Agent': 'request'
      }
    };

    return new Promise(function (resolve, reject) {
      request.get(options, function (err, resp, body) {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(body));
        }
      })
    })
  }

  wordsArraySimilarity(array) {
    let similarityArray = [];
    for (var i = 0; i < array.length; i++) {
      for (var k = i + 1; k < array.length; k++) {
        let word_one = this.characterSwitch(array[i]);
        let word_two = this.characterSwitch(array[k]);
        similarityArray.push(this.wordDifference(word_one, word_two));
      }
    }
    return this.checkForOverallSimilarity(similarityArray);

  }
  checkForOverallSimilarity(similarityArray) {
    let sum = similarityArray.reduce((previous, current) => current += previous);
    return sum / similarityArray.length;

  }
}