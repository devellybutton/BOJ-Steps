// 해시 사용
// 백준 실행시 시간초과

const fs = require('fs');

const inputPath = './input2.txt' || '/dev/stdin';

const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const N = parseInt(input[0].split(' ')[0])
const M = parseInt(input[0].split(' ')[1])
const arr = input[1].split(' ').map(Number);

const min = Math.min(...arr);
const max = Math.max(...arr);

const numbers = [];
for (let i = max; i >= min; i--) {
  numbers.push(i);
}

const countMap = new Map();

for (let number of numbers) {
  arr.forEach(el => {
    if (el >= number) {
      countMap.set(number, (countMap.get(number) || 0) + el - number)
    }
  })
}

// console.log(countMap)
let answer = 0;

countMap.forEach((key, value) => {
  if (key === M) {
    answer = value;
  }
})

console.log(answer);