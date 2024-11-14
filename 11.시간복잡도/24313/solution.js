const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const [a, b] = input[0].split(' ').map(Number);
const c = Number(input[1]);
const n0 = Number(input[2]);

// (a - c) * n + b <= 0
// 여기서 n은 n0 이상 100 이하

function isBigO(a, b, c, n0) {
  for (let n = n0; n <= 100; n++) {
    if (!((a - c) * n + b <= 0)) return 0
  }
  return 1
}

console.log(isBigO(a, b, c, n0))