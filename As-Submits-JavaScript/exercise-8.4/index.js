//

const array = ["Hello", "GoodDay", "YourWelcome", "hotdog", "hamburgers"];
function counter(array) {
  const countObj = {};
  for (let i = 0; i < array.length; i++) {
      array[i] = array [i].toLowerCase();
    for (let j = 0; j < array[i].length; j++) {
      const char = array[i][j];
      if (countObj[char] > 0) {
        countObj[char]++;
      } else {
        countObj[char] = 1;
      }
    }
  }
  return countObj;
}

console.log(counter(array));
