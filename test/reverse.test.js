const reverse = require('../src/reverse');

it('should reverse string', () => {
  expect(reverse('hello')).toEqual('olleh');
});
