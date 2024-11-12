const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const input = fs.readFileSync(inputPath).toString().trim();

const N = Number(input);

function conversion(year) {
  return year - 543;
}

console.log(conversion(input))