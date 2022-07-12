const { reverseWords, capitalizeWords, fizzbuzz } = require('.');
describe('reverseWords', () => {
  it('should reverse the words of a sentence', () => {
    expect(reverseWords('alchemy rocks gold')).toBe('ymehcla skcor dlog');
  });
  it('should capitalize first letter of each word', () => {
    expect(capitalizeWords('alchemy rocks gold')).toBe('Alchemy Rocks Gold');
  });
  it('If number is divisible by 3 print fizz, if number is divisible by 5 print buzz and if number is divisible by both print fizzbuzz', () => {
    expect(fizzbuzz(16)).toEqual([
      1,
      2,
      'Fizz',
      4,
      'Buzz',
      'Fizz',
      7,
      8,
      'Fizz',
      'Buzz',
      11,
      'Fizz',
      13,
      14,
      'FizzBuzz',
      16,
    ]);
  });
});
