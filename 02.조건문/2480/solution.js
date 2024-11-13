const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const input = fs.readFileSync(inputPath).toString().trim().split(' ');

const [num1, num2, num3] = input.map(Number);

function dice(a, b, c) {
  let money;

  if (a === b && b === c) return 10000 + a  * 1000
  else if (a === b) {
    money = 1000 + a * 100
  } else if (b === c) {
    money = 1000 + b * 100
  } else if (c === a) {
    money = 1000 + c * 100
  } else {
    money = Math.max(a, b, c) * 100
  }
  return money;
}

console.log(dice(num1, num2, num3))