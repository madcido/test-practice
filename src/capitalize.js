function capitalize(str) {
  const firstLetter = str[0];
  const rest = str.slice(1);
  return firstLetter.toUpperCase() + rest.toLowerCase();
}

module.exports = capitalize;
