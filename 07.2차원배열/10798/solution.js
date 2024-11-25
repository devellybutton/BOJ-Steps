const fs = require('fs');

const inputPath = process.stdin.isTTY ? './input.txt' : '/dev/stdin';

const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const arr = input.map(el => {
  return el.trim().split('');
})

/*
[
  [ 'A', 'A', 'B', 'C', 'D', 'D' ],
  [ 'a', 'f', 'z', 'z' ],
  [ '0', '9', '1', '2', '1' ],
  [ 'a', '8', 'E', 'W', 'g', '6' ],
  [ 'P', '5', 'h', '3', 'k', 'x' ]
]
*/
// i : arr의 길이
// j : 특정 배열의 길이


// 배열의 최대 길이 구하기

let maxLength = arr[0].length;

arr.forEach(el => {
  if (el.length > maxLength) maxLength = el.length;
})


// 배열의 원소를 거꾸로 순회

let result = '';

for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j][i]) result += arr[j][i];
  }
}

console.log(result)