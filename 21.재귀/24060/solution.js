const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const input = fs.readFileSync(inputPath).toString().replace(/\r/g, '').trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// K 번쨰 수, 인덱스 0부터 시작
let count = 0;  // 병합 횟수
let target = -1;  // K번째 값

// 병합 함수
function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;

  // arr1과 arr2를 병합
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    }
    else {
      result.push(arr2[j]);
      j++;
    }
    count++;
    checkCount(result);
  }

  // 두 배열의 길이가 달라서 배열의 원소가 남은 경우
  // arr1의 원소가 더 있는 경우
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
    count++;
    checkCount(result);
  }

  // arr2의 원소가 더 있는 경우
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
    count++;
    checkCount(result);
  }

  return result;
}

function checkCount(inputArr) {
  if (count === K) {
    // 구하려고 하는 값은 입력받은 배열의 마지막 값
    target = inputArr[inputArr.length - 1];
  }
}

function mergeSort(arr) {
  // 배열의 원소의 개수가 1보다 작으면 재귀를 종료
  if (arr.length <= 1) return arr;

  let mid = Math.ceil(arr.length / 2); // arr의 가운데 인덱스

  // 재귀적으로 배열을 분할하고, 분할하는 배열을 정렬하여 합치기
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  // 병합된 배열 반환
  return merge(left, right);
}

// 합병 정렬을 수행
mergeSort(arr);

console.log(target);