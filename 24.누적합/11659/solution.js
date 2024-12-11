// 11659번. 구간 합 구하기 4

const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const input = fs.readFileSync(inputPath).toString().replace(/\r/g, '').trim().split('\n');

const [M, N] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

const subArr = [];

for (let i = 2; i < arr.length; i++) {
  subArr.push(input[i].split(' ').map(Number));
}

function getSubSum(inputArr) {
  let [start, end] = inputArr;
  let subSum = 0;

  for (let i = start - 1; i <= end - 1; i++) {
    subSum += arr[i];
  }
  return subSum;
}

subArr.forEach(el => {
  console.log(getSubSum(el))
})