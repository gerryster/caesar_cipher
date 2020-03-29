var CaesarCipher = require('../src/caesar_cipher');
console.log("typeof CaesarCipher: ", typeof(CaesarCipher));

var assert = require('assert');

describe('CeasarCipher', function () {
  describe('#enrtypt()', function () {
    it('should return "x" when passed "a"', function() {
      var caesar = new CaesarCipher();
      assert.equal(caesar.encrypt('a'), 'x');
    });
  });
});
