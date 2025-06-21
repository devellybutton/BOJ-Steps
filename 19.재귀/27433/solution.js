const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const N = Number(fs.readFileSync(inputPath).toString().replace(/\r/g, '').trim());

function factorial(number) {
  if (number === 1 || number === 0) return 1;
  return number * factorial(number - 1);
}

console.log(factorial(N));