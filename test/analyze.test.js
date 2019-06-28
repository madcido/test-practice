const analyze = require('../src/analyze');

it('should return analyze object of an array', () => {
  expect(analyze([7,5,3,1])).toEqual({ average: 4, max: 7, min: 1, length: 4})
});
