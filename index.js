function reverseWords(sentence) {
  const reversedSentence = sentence
    .split(' ')
    .map((char) => char.split('').reverse().join(''))
    .join(' ');

  return reversedSentence;
}

function capitalizeWords(sentence) {
  const capitalizedSentence = sentence
     .split(' ')
     .map((elem) => elem.charAt(0).toUpperCase() + elem.substring(1).toLowerCase())
     .join(' ');

  return capitalizedSentence;
}

module.exports = { reverseWords, capitalizeWords };
