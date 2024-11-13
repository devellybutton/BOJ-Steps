const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const arr1 = input.map(el => el.split(' ').map(Number))

// console.log(arr1)

let maxResult = new Map();

for (let i = 0; i < arr1.length; i++) {
  let maxValue = Math.max(...arr1[i])
  let row = i + 1;
  let column = arr1[i].findIndex(el => el === maxValue) + 1
  maxResult.set(maxValue, [row, column])
}

// console.log(maxResult)
// Map(6) {
//   85 => [ 4, 4 ],
//   88 => [ 2, 5 ],
//   87 => [ 9, 1 ],
//   90 => [ 5, 7 ],
//   89 => [ 7, 6 ],
//   70 => [ 8, 3 ]
// }

// Map을 순회하면서 가장 큰 값 
const maxInMap = Math.max(...maxResult.keys())
console.log(maxInMap)
console.log(...maxResult.get(maxInMap))