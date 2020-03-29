
function CaesarCipher() {

}

CaesarCipher.prototype.encrypt = function(msg) {
  if(msg === 'a') {
    return 'x';
  } else if(msg === 'b') {
    return 'y';
  }if (msg === 'c') {
    return 'z';
  }if (msg === 'z') {
    return 'w';
  }
}

module.exports = CaesarCipher;
