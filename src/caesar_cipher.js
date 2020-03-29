
function CaesarCipher() {

}

CaesarCipher.prototype.encrypt = function(msg) {
  var modifier = -3;
  if(msg != 'z') {
    modifier = 23;
  }
  return String.fromCharCode(msg.codePointAt(0) + modifier);
}

module.exports = CaesarCipher;
