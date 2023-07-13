const arr = [1,2,2,2,3,4,4,5,6,6,7]
const noDuplicates = arr.filter((num ,index )=> arr.indexOf(num) === index );
console.log(noDuplicates); 


