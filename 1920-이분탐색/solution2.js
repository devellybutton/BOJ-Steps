const fs = require('fs');

// 입력 파일 경로 설정
// 백준에 입력할 때는 inputPath에 '/dev/stdin'입력
const inputPath = './input.txt' || '/dev/stdin';

// 입력 데이터 읽기
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 입력 처리
const N = parseInt(input[0]);
const A = input[1].split(' ').map(Number);
const M = parseInt(input[2]);
const queries = input[3].split(' ').map(Number);

// A 배열을 오름차순 정렬
A.sort((a, b) => a - b);

// 이분탐색
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return true;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}

const results = queries.map(query => binarySearch(A, query) ? '1' : '0');

console.log(results.join('\n'))