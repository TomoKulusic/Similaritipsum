const expect = require('chai').expect;
const BusinessLayer = require('../services/businessLayer.js')
var bl = new BusinessLayer();
 
describe('Index', function () {
    describe('#characterSwitch()', function () {
        it('should return the string of characters', function () {
            let result = bl.characterSwitch('ababab');
            expect(result).to.equal('%*%*%*');
        });
    });
});

describe('Index', function () {
  describe('#wordDifference()', function () {
      it('should return the % of difference', function () {
          let result = bl.wordDifference('%','*');
          expect(result).to.equal(0);
      });
  });
});