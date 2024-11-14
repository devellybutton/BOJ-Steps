const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const input = parseInt(fs.readFileSync(inputPath).toString().trim());

console.log(input ** 2)
console.log(2)