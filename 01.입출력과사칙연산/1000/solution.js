const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const input = fs.readFileSync(inputPath).toString().replace(/\r/g, '').trim().split(' ');

// 입력 처리
const N = parseInt(input[0]);
const M = parseInt(input[1]);

// 연산 결과 출력
console.log(N + M);