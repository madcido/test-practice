function capitalize(str) {
    let firstLetter = str[0];
    let rest = str.slice(1);
    return firstLetter.toUpperCase() + rest.toLowerCase();
}

module.exports = capitalize;
