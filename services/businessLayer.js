

module.exports = class BusinessLayer {


  constructor() {
    this.leven = require('leven');

    this.VOWEL_CHAR = "%"
    this.CONSONENT_CHAR = "*"
    this.SPACE_CHAR = "/"
    this.OTHER_CHAR = "?"
    this.vowels = ['A', 'E', 'I', 'O', 'U']
    this.consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z']
  }

  characterSwitch(input) {
    let inputCharArray = input.split('');
    let newString = ""
    for (let i = 0; i < inputCharArray.length; i++) {
      if (this.checkIfVowel(inputCharArray[i])) {
        newString += this.VOWEL_CHAR;
      } else if (this.checkIfConsonant(inputCharArray[i])) {
        newString += this.CONSONENT_CHAR;
      }
    }

    return newString;
  }

  checkIfVowel(word) {
    for (let i = 0; i < this.vowels.length; i++) {
      if (this.vowels[i].toLocaleLowerCase() === word) {
        return true;
      }
    }
    return false;
  }

  checkIfConsonant(word) {
    for (let i = 0; i < this.consonants.length; i++) {
      if (this.consonants[i].toLocaleLowerCase() === word) {
        return true;
      }
    }
    return false;
  }

  wordDifference(first_word, second_word) {
    let difference = this.leven(first_word.toLowerCase(),second_word.toLowerCase());
    let longest = Math.max(first_word.length, second_word.length);
    return (longest-difference)/longest;
  }
}