const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const input = fs.readFileSync(inputPath).toString().trim();

const N = Number(input);

function grade(score) {
  if (90 <= score && score <= 100) return 'A';
  else if (80 <= score && score < 90) return 'B';
  else if (70 <= score && score < 80) return 'C';
  else if (60 <= score && score < 70) return 'D';
  else return 'F'
}

console.log(grade(input))