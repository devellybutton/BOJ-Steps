const fs = require('fs');

const inputPath = './input.txt' || '/dev/stdin';

// 입력 파일에서 데이터 읽기
const input = fs.readFileSync(inputPath).toString().trim().split(' ');

const arr = input.map(Number);

function comparision(a, b) {
  if (a > b) return '>';
  else if (a < b) return '<';
  else return '==';
}

console.log(comparision(arr[0], arr[1]))