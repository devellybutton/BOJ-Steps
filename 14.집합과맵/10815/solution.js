// 10815번. 숫자 카드

const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const input = fs.readFileSync(inputPath).toString().replace(/\r/g, '').trim().split('\n');

const arr = input.map(el => el.split(' ').map(Number));

const cards = new Set(arr[1]);

const result = [];

for (let i = 0; i < arr[3].length; i++) {
  let num = cards.has(arr[3][i]) ? 1 : 0;
  result.push(num);
}

console.log(result.join(' '));