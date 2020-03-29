var CaesarCipher = require('../src/caesar_cipher');
console.log("typeof CaesarCipher: ", typeof(CaesarCipher));

var assert = require('assert');

describe('CeasarCipher', function () {
  describe('#enrtypt()', function () {
    it('should return "x" when passed "a"', function() {
      var caesar = new CaesarCipher();
      assert.equal(caesar.encrypt('a'), 'x');
    });

    it('should return "y" when passed "b"', function () {
      var caesar = new CaesarCipher();
      assert.equal(caesar.encrypt('b'), 'y');
    });

    it('should return "z" when passed "c"', function () {
      var caesar = new CaesarCipher();
      assert.equal(caesar.encrypt('c'), 'z');
    });

    it('should return "w" when passed "z"', function () {
      var caesar = new CaesarCipher();
      assert.equal(caesar.encrypt('z'), 'w');
    });
  });
});
