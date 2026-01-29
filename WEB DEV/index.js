// let date = new Date();
// console.log(date);

// let date2 = new Date();
// date2.setFullYear(2005);
// date2.setMonth(5); // December (0-indexed)
// date2.setDate(11);
// console.log(date2);

// Arrays creation
//  let arr=[1,2,3.2,4];
//  // adding new elements
// arr.push(9);
// arr.unshift(0);
// arr.shift();
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

let firsttArr = [1, 2, 3];
let secondArr = [4, 5, 6];
let combinedArr = firsttArr.concat(secondArr);
let combinedArr1 = [...firsttArr, ...secondArr];
console.log(combinedArr);