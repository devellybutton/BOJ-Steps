const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const input = fs.readFileSync(inputPath).toString().trim();

const N = BigInt(input);

const count = (N * (N - 1n) * (N - 2n)) / 6n; 

console.log(Number(count));

console.log(3)