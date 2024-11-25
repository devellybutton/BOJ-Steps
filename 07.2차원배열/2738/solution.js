const fs = require('fs');

const inputPath = process.stdin.isTTY ? './input.txt' : '/dev/stdin';

const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const arr = input.map(el => {
  return el.split(' ').map(Number);
})

/*
[
  [ 3, 3 ],  0 
  [ 1, 1, 1 ], 1
  [ 2, 2, 2 ], 2
  [ 0, 1, 0 ], 3
  [ 3, 3, 3 ], 4
  [ 4, 4, 4 ], 5
  [ 5, 5, 100 ] 6
]
*/

const [N, M] = arr[0];

const arr1 = [];
const arr2 = [];

// 배열 A에 원소 넣기
for (let i = 1; i <= N; i++) {
  arr1.push(arr[i])
}

// 배열 B에 원소 넣기
for (let i = N + 1; i <= N + N; i++) {
  arr2.push(arr[i])
}

// const arr1 = arr.slice(1, N + 1); // 행렬 A
// const arr2 = arr.slice(N + 1, 2 * N + 1); // 행렬 B

// console.log(arr1, arr2)
// [ [ 1, 1, 1 ], [ 2, 2, 2 ], [ 0, 1, 0 ] ]
// [ [ 3, 3, 3 ], [ 4, 4, 4 ], [ 5, 5, 100 ] ]

// 두 배열 더하기
for (let i = 0; i < N; i++) {
  let row = []; // 각 행을 저장할 배열
  for (let j = 0; j < M; j++) {
    row.push(arr1[i][j] + arr2[i][j]);
  }
  console.log(row.join(' '));
}

/**
입력 처리: O(N * M)
배열 나누기: O(N * M)
행렬 덧셈: O(N * M)
 */
