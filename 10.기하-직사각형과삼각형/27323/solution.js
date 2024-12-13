// 27323번. 직사각형

const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const [A, B] = fs.readFileSync(inputPath).toString().replace(/\r/g, '').trim().split('\n').map(Number);

const area = A * B;

console.log(area);