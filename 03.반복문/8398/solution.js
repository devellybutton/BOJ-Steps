// 입력 받기
const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 
const input = fs.readFileSync(inputPath).toString().trim();

const N = parseInt(input);

let result = 0;

for (let i = 1; i <= N; i++) {
  result += i;
}

console.log(result);