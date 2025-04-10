// 입력 받기
const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 
const input = fs.readFileSync(inputPath).toString().trim();

// 첫 번째 줄에서 N을 추출
const N = parseInt(input[0]);

for (let i = 1; i <= 9; i++) {
  console.log(`${N} * ${i} = ${N * i}`)
}