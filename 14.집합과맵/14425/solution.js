const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const arr = fs.readFileSync(inputPath).toString().replace(/\r/g, '').trim().split('\n');

const [N, M] = arr[0].split(' ').map(Number);

const wordsInSet = [];

let count = 0;

for (let i = 1; i <= N; i++) {
  wordsInSet.push(arr[i]);
}

const set = new Set(wordsInSet)

for (let i = N + 1; i < arr.length; i++) {
  if (set.has(arr[i])) count++;
}

console.log(count)