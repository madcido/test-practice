const caesar = require('../src/caesar');

it('changes letters based on step', () => {
    expect(caesar('abc', 2)).toEqual('cde');
})

it('wraps from a to z', () => {
    expect(caesar('a', -1)).toEqual('z');
    expect(caesar('z', 1)).toEqual('a');
})

it('keeps the same case', () => {
    expect(caesar('AbCdE', -1)).toEqual('ZaBcD');
})

it('does not mess with punctuation', () => {
    expect(caesar("What's up, man?", 1)).toEqual("Xibu't vq, nbo?");
})
