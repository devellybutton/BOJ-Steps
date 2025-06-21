const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const input = fs.readFileSync(inputPath).toString().replace(/\r/g, '').trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const x = Number(input[2]);

// 서로 다른 두 수의 합이 x가 되는 쌍의 개수 구하기
const sortedArr = arr.sort((a, b) => a - b);

let left = 0;
let right = sortedArr.length - 1;
let count = 0;

while (left < right) {
  const sum = sortedArr[left] + sortedArr[right];

  if (sum === x) {
    count++;
    left++;
    right--;
  } else if (sum > x) {
    right--;
  } else if (sum < x) {
    left++;
  }
}

console.log(count)

/**
 * 시간 복잡도
 * 
 * - 배열 정렬 :  O(n log n)
 * - 투 포인터로 합을 계산하는 부분: O(n)
 * - 전체 : O(n log n)
 */