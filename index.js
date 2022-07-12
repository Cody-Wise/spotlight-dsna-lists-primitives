function reverseWords(sentence) {
  const reversedSentence = sentence
    .split(' ')
    .map((char) => char.split('').reverse().join(''))
    .join(' ');

  return reversedSentence;
}

module.exports = { reverseWords };
