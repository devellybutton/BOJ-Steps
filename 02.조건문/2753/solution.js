const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const input = fs.readFileSync(inputPath).toString().trim();

const N = Number(input);

function leapYear(score) {
  const con1 = score % 4 === 0
  const con2 = score % 100 !== 0
  const con3 = score % 400 === 0
  return (con1) && (con2 || con3) ? 1 : 0
}

console.log(leapYear(input))