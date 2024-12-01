// 1764번. 듣보잡

const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const input = fs.readFileSync(inputPath).toString().replace(/\r/g, '').trim().split('\n');

const N = Number(input[0].split(' ')[0]); // 듣도 못한 사람의 수
const M = Number(input[0].split(' ')[1]); // 보도 못한 사람의 수

// Set을 만들어서 중복없이 명단으로 만들어줌.
const neverHeardOf = new Set(input.slice(1, N + 1));
const neverSeenBefore = new Set(input.slice(N + 1, N + 1 + M));

// 듣보잡 명단
const answer = [];

// 둘 다 있는 경우 출력
for (person of neverHeardOf) {
  if (neverSeenBefore.has(person)) {
    answer.push(person);
  }
}

// 듣보잡 명단을 사전순 정렬
answer.sort();

// 정답 출력
console.log(answer.length);
console.log(answer.join('\n'))