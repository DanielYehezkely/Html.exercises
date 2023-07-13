// 1
const objArray = new Array(100).fill({ same: "object" });
console.log(objArray);

// 2
const arrayRange = (start, stop, step) =>
  Array.from(
    { length: (stop - start) / step + 1 },
    (value, index) => start + index * step
  );
console.log(arrayRange(1, 100, 1));
// 3
const exampleObject = { car: "toyota", color: "white", year: "2020" };
const valuesArray = Object.values(exampleObject);
console.log(valuesArray);
// 4
const exampleArray = [1, 2, 3, 4, 5, 6];
const newObject = Object.assign({}, exampleArray); 
console.log(newObject);
// 5
const isArr = Array.isArray(exampleArray);
console.log(isArr);
// 6
const copyOfArray = exampleArray.map(num => num);
copyOfArray.push(8);
console.log(exampleArray);
console.log(copyOfArray);
// not changing the original if modified

const originalArray = [1, 2, 3, 4, 5];
const modifiedArray = originalArray;

console.log(originalArray);
console.log(modifiedArray);

modifiedArray[0] = 10;

console.log(originalArray); 
console.log(modifiedArray);
