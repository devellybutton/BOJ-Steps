const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';
const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const input = fs.readFileSync(inputPath).toString().replace(/\r/g, '').trim().split('\n');

const T = parseInt(input[0]);
const result = [];

for (let i = 1; i <= T; i++) {
  const firstLetter = input[i].split('')[0];
  const finalLetter = input[i].split('')[input[i].length - 1];
  result.push(firstLetter + finalLetter)
}

console.log(result.join('\n'))