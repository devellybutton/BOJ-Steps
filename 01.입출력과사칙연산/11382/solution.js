const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const input = fs.readFileSync(inputPath).toString().trim().split(' ');

const arr = input.map(Number);

function triple(a, b, c) {
  return a + b + c;
}

console.log(triple(arr[0], arr[1], arr[2]))