// 1620번. 나는야 포켓몬 마스터 이다솜
// 팁 : 입력과 출력만 보면 됨. 앞에 읽을 필요 없음.
// 시간 초과되니까 이렇게 풀면 안 됨.

const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const input = fs.readFileSync(inputPath).toString().replace(/\r/g, '').trim().split('\n');

const N = Number(input[0].split(' ')[0]); // 포켓몬 도감에 있는 포켓몬 수
const M = Number(input[0].split(' ')[1]); // 맞춰야 하는 문제 수

// 포켓몬 도감 배열의 원소를 Map으로 '이름'-인덱스 배열로 매핑
const pokemons = input.slice(1, N + 1);
const pokemonMap = new Map();
for (let i = 0; i < pokemons.length; i++) {
  pokemonMap.set(pokemons[i], i + 1);
}

// 키를 입력하면 값을 반환하는 함수
function getValueByKey(inputKey) {
  for (let [key, val] of pokemonMap) {
    if (key === inputKey) return val;
  }
}

// 값을 입력하면 키를 반환하는 함수
function getKeyByValue(inputValue) {
  for (let [key, val] of pokemonMap) {
    if (val === inputValue) return key;
  }
}

// 퀴즈 맞추기
const quiz = input.slice(N + 1);
const answer = [];

for (let i = 0; i < quiz.length; i++) {
  // 알파벳 (키) => 숫자 (값)
  if (Number.isNaN(Number(quiz[i]))) {
    answer.push(getValueByKey(quiz[i]));
  } else {
    // 숫자 (값) => 알파벳 (키)
    answer.push(getKeyByValue(Number(quiz[i])));
  }
}

console.log(answer.join('\n'))

/**
 * 시간 복잡도
 * 
 * - 도감 세팅 : O(N)
 * - 퀴즈 처리 : O(M)
 * -- 번호로 이름 찾기 : O(N)
 * -- 이름으로 번호 찾기 : O(1)
 * - 전체: O(N + M * N)
 */