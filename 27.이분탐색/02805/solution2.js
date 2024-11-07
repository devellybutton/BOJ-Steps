const fs = require('fs');

const inputPath = './input1.txt' || '/dev/stdin';

const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const N = parseInt(input[0].split(' ')[0])
const M = parseInt(input[0].split(' ')[1])
const arr = input[1].split(' ').map(Number);

let min = 0;
let max = Math.max(...arr);
let answer = 0;

while (min <= max) {
  let mid = Math.floor((min + max) / 2); // 현재 높이
  let woodCollected = arr.reduce((acc, height) => { // 얻을 수 있는 나무양
    return acc + (height > mid ? height - mid : 0); 
  }, 0)

  if (woodCollected >= M) {
    answer = mid; // 높이가 충분히 큼.
    min = mid + 1; 
    continue; 
  } else { // 높이가 작아서 나무가 부족함.
    max = mid - 1;
  }
}

console.log(answer);