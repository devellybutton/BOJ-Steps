// 이진탐색
// 백준 실행시 시간초과

const fs = require('fs');

const inputPath =  './input.txt' || '/dev/stdin';

const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const N = parseInt(input[0]);
const arr1 = input[1].split(' ').map(Number);
const M = parseInt(input[2]);
const arr2 = input[3].split(' ').map(Number);
const arr3 = []; // 결과값을 담을 배열

// 배열을 오름차순 정렬
arr1.sort((a, b) => a - b);
// [-10, -10, 2, 3, 3, 6, 7, 10, 10, 10]

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let count = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr1[mid] === target) {
      count += 1;

      // 여기서 바로 break문을 쓰면 count가 1개만 증가함.
      // 그러므로 동일한 숫자는 모두 count가 1씩 증가하도록 처리해야함.
      // left를 mid - 1(왼쪽으로 이동), right를 mid + 1(오른쪽으로 이동)
      
      // mid 왼쪽에 있는 값 비교
      // tempLeft < left면 종료
      let tempLeft = mid - 1;
      while (tempLeft >= left && arr1[tempLeft] === target) {
        count++;
        tempLeft--;
      } 

      // mid 오른쪽에 있는 값 비교
      // tempRight > right면 종료
      let tempRight = mid + 1;
      while (tempRight <= right && arr1[tempRight] === target) {
        count++;
        tempRight++;
      }

      break;
    } else if (arr1[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  arr3.push(count);
}

arr2.forEach(el => binarySearch(arr1, el))
console.log(arr3.join(' '))