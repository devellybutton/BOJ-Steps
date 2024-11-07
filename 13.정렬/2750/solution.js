const fs = require('fs');

const inputPath = './input.txt';

// 입력 파일에서 데이터 읽기
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 입력 처리
const arr = input.slice(1).map(Number);

// console.log(filteredArr)
// [ 5, 2, 3, 4, 1 ]

// 삽입 정렬
function insertSort(arr) {
  // i : 정렬되지 않은 부분
  // key : 정렬되지 않은 부분의 첫번째 원소
  // j : 정렬된 부분
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let j = i - 1;
    let key = arr[i];

    while (j >= 0 && key < arr[j]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = key;
  }

  return arr;
}

// console.log(insertSort(filteredArr));

// 시간복잡도 : O(n²)

insertSort(arr).forEach((el) => {
  console.log(el);
})