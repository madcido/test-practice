function cipher(str, step) {
  let code = str.charCodeAt(0);
  if (code >= 65 && code <= 90) {
    code += step;
    code = code < 65 ? code + 26 : code > 90 ? code - 26 : code;
  } else if (code >= 97 && code <= 122) {
    code += step;
    code = code < 97 ? code + 26 : code > 122 ? code - 26 : code;
  } else {
    return str;
  }
  return String.fromCharCode(code);
}

function caesar(str, step) {
  const ciphered = [];
  str.split('').forEach((e) => ciphered.push(cipher(e, step)));
  return ciphered.join('');
}

module.exports = caesar;
