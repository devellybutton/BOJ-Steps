// 2675번. 문자열 반복

const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

// 입력 처리
// T : 테스트 케이스 개수
// R : 반복 횟수
// S : 문자열 S
const input = fs.readFileSync(inputPath).toString().replace(/\r/g, '').trim().split('\n');
const T = Number(input[0]);

// 결과를 저장할 배열
let results = [];

// 각 테스트케이스 처리
// 문자열 순회를 위해 스프레드 문법 사용 : [...S]
// 각 문자 반복을 위해 repeat 메서드 사용 : 문자.repeat(횟수)
for (let i = 1; i <= T; i++) {
  const [R, S] = input[i].split(' ');
  const result = [...S].map(letter => letter.repeat(Number(R))).join('');
  results.push(result);
}

// 개행문자로 이어서 결과 출력
console.log(results.join('\n'));

/**
 * 시간 복잡도
 * 
 * - 입력처리 : O(N)
 * - 각 테스트 케이스 처리 : 
 * 1) input[i].split(' ') 문자열 분리 : O(S의 길이)
 * 2) repeat()으로 반복 : O(S의 길이 x R)
 * 3) 다시 join()으로 합침 : O(S의 길이 x R)
 * => O(S의 길이 * R)
 * - 전체 복잡도 : O(T * S의 길이 * R)
 */