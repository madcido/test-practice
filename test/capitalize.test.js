const capitalize = require('../src/capitalize');

it('uppercases just the first letter', () => {
    expect(capitalize('hello')).toEqual('Hello');
});

it('downcases everything but the first letter', () => {
    expect(capitalize('HELLO')).toEqual('Hello');
});
