const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const arr = input.map(Number);

const firstLine = arr[0] * (arr[1].toString().split('')[2])
const secondLine = arr[0] * (arr[1].toString().split('')[1])
const thirdLine = arr[0] * (arr[1].toString().split('')[0])

const result = firstLine + secondLine * 10 + thirdLine * 100

console.log(firstLine);
console.log(secondLine);
console.log(thirdLine);
console.log(result);