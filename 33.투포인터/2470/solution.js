const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const input = fs.readFileSync(inputPath).toString().replace(/\r/g, '').trim().split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// 주어진 배열을 정렬
const sortedArr = arr.sort((a, b) => a - b);

let i = 0;
let j = sortedArr.length - 1;
let minSum = Number.MAX_SAFE_INTEGER;
let answer = [];

while (i < j) {
  let sum = sortedArr[i] + sortedArr[j];

  // 찾으려고 하는 값을 기준으로 포인터를 이동
  // 1) 합이 0이 될 때 
  // 2) 합이 0에 가까운 가장 작은 수를 찾으면 
  // => 최솟값 업데이트
  if (Math.abs(sum) === 0 || Math.abs(sum) < Math.abs(minSum)) {
    minSum = sum;
    answer = [sortedArr[i], sortedArr[j]];
  }

  // 합이 0보다 크면 j를 왼쪽으로 이동
  // 합이 0보다 작으면 i를 오른쪽으로 이동
  // if, else if 문으로 분기하면 시간초과됨.
  if (sum > 0) {
    j--;
  } else {
    i++;
  }
} 

console.log(...answer);

/**
 * 시간 복잡도
 * 
 * - 정렬 : O(N log N)
 * - 투포인터 탐색: O(N)
 * - 전체 : O(N log N)
 */