function analyze(array) {
  return {
    average: array.reduce((acc, curr) => acc + curr, 0) / array.length,
    min: array.reduce((prev, curr) => (prev > curr ? curr : prev)),
    max: array.reduce((prev, curr) => (prev < curr ? curr : prev)),
    length: array.length,
  };
}

module.exports = analyze;
