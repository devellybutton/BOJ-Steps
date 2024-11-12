// 15439. 베라의 패션
const fs = require('fs');

const inputPath = './input.txt' || '/dev/stdin';

const input = fs.readFileSync(inputPath).toString().trim();

let N = Number(input);

// 상의 x 하의 조합은 N * N
// 둘 다 같은 경우는 N개
let result = N * N - N 

console.log(result)