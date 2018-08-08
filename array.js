let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

let first = arr.shift();
let last = arr.pop();

console.log(first);
console.log(last);

arr.unshift(last);
arr.push(first);
console.log(arr);

let slicedArr = arr["slice"](2, 5);
console.log("slicedArr: ", slicedArr);
console.log("original:", arr);

let spliceArr = arr.splice(2, 5);

console.log("spliced array", spliceArr);
console.log("original: ", arr);
