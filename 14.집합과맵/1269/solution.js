// 1269번. 대칭 차집합

const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const input = fs.readFileSync(inputPath).toString().replace(/\r/g, '').trim().split('\n');

const N = Number(input[0].split(' ')[0]); // 집합 A의 원소의 개수
const M = Number(input[0].split(' ')[1]); // 집합 B의 원소의 개수

const setA = new Set([...input[1].split(' ').map(Number)])
const setB = new Set([...input[2].split(' ').map(Number)])

// 중복된 원소의 개수 구하기
// 각 집합의 원소의 개수에서 중복된 원소의 개수만 제거
let commonCount = 0;

for (let num of setA) {
  if (setB.has(num)) {
    commonCount++;
  }
}

const answer = setA.size + setB.size - commonCount * 2;

console.log(answer);