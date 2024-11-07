const fs = require('fs');

const inputPath = './input.txt';

// 입력 파일에서 데이터 읽기
const input = fs.readFileSync(inputPath).toString().trim().split(' ');

// 입력 처리
const N = parseInt(input[0]);
const M = parseInt(input[1]);

console.log(N + M)