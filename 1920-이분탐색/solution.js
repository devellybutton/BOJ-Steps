const fs = require('fs');

const inputPath = './input.txt' || '/dev/stdin';

// 입력 파일에서 데이터 읽기
const input = fs.readFileSync(inputPath).toString().trim().split('\n');

// 입력 처리
const N = parseInt(input[0]);
const A = input[1].split(' ').map(Number);
const M = parseInt(input[2]);
const queries = input[3].split(' ').map(Number);

// A 리스트 원소를 해시에 저장
// console.log(A)
const ASet = new Set(A);

// console.log(ASet)
const results = queries.map(query => (ASet.has(query) ? 1 : 0))

console.log(results.join('\n'))
