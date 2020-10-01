function findLongestWord(string = '') {
  // Write code under this line
  let word = '';
  string
    .split(' ')
    .forEach(item => (word.length < item.length ? (word = item) : null));
  return word;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
('jumped');

console.log(findLongestWord('Google do a roll'));
('Google');

console.log(findLongestWord('May the force be with you'));
('force');
