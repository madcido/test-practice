const calculator = require('../src/calculator');

describe('ADD', () => {
  it('should return addition of two numbers', () => {
    expect(calculator.add(2,2)).toBe(4);
  });

});

describe('SUBTRACT', () => {
  it('should return subtraction of two numbers', () => {
    expect(calculator.subtract(6,4)).toBe(2);
  });
});

describe('MULTIPLY', () => {
  it('should return product of two numbers', () => {
    expect(calculator.multiply(6,4)).toBe(24);
  });
});

describe('DIVIDE', () => {
  it('should return quotient of two numbers', () => {
    expect(calculator.divide(6,2)).toBe(3);
  });
});


