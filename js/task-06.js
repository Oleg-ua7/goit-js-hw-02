function mapArray(array) {
  'use strict';
  const numbers = new Array(array.length);
  for (let i = 0; i < array.length; i += 1) {
    // Write code under this line
    const numbers = new Array(array.length);
    for (let i = 0; i < array.length; i += 1) {
      numbers.splice(i, 1, array[i] * 10);
    }
    return numbers;
  }
  return numbers;
}

//console.log(mapArray([-2, 0, 2]));
// [-20, 0, 20]

//console.log(mapArray([-2.5, 0, 2.5]));
// [-25, 0, 25]
