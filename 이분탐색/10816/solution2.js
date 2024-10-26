// 이진탐색

const fs = require('fs');

const inputPath =  './input.txt' || '/dev/stdin';

const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const N = parseInt(input[0]);
const arr1 = input[1].split(' ').map(Number);
const M = parseInt(input[2]);
const arr2 = input[3].split(' ').map(Number);
const arr3 = []; // 결과값을 담을 배열

// 해시맵 : 원소의 개수 저장
const countMap = new Map();

// arr1 배열의 원소의 횟수를 Map 객체에 저장
// key : 숫자, value : 등장횟수
arr1.forEach(num => {
  if (countMap.has(num)) {
    // 값을 가져와서 1 증가시킨 후, 다시 설정
    countMap.set(num, countMap.get(num) + 1);
  } else {
    // 처음 등장하는 경우 1로 설정
    countMap.set(num, 1);
  }
})

/*
주의 : 이렇게 값을 직접 변경하는 것은 불가능
arr1.forEach(num => {
  if (countMap.has(num)) {
    countMap.get(num)++;
  } else {
    countMap.set(num, 1);
  }
});
*/

// arr2 배열의 원소를 하나씩 순회
// countMap에서 key(arr2 배열의 각 원소)에 맞는 value(등장 횟수)를
// arr3 배열에 집어넣음.
arr2.forEach(target => {
  arr3.push(countMap.get(target) || 0);
})

// 정답 출력
console.log(arr3.join(' '))