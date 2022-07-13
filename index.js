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
    .map(
      (elem) => elem.charAt(0).toUpperCase() + elem.substring(1).toLowerCase()
    )
    .join(' ');
  return capitalizedSentence;
}

function capitalizeWords(sentence) {
  const capitalizedSentence = sentence
     .split(' ')
     .map((elem) => elem.charAt(0).toUpperCase() + elem.substring(1).toLowerCase())
     .join(' ');

  return capitalizedSentence;
}

module.exports = { reverseWords, capitalizeWords };
function fizzbuzz(n) {
  const arr = [];
  for (i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push('FizzBuzz');
    } else if (i % 5 === 0) {
      arr.push('Buzz');
    } else if (i % 3 === 0) {
      arr.push('Fizz');
    } else {
      arr.push(i);
    }
  }
  console.log(arr);
  return arr;
}
module.exports = { reverseWords, capitalizeWords, fizzbuzz };
