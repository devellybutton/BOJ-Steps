// 27866번. 문자와 문자열

const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

// 입력 처리
const input = fs.readFileSync(inputPath).toString().replace(/\r/g, '').trim().split('\n');
const [S, i] = [input[0], Number(input[1])];

// 테스트케이스 처리
// i는 인덱스이므로 순서 order는 인덱스에서 1 빼야함.
const order = i - 1;
console.log(S[order]);

/**
 * 시간 복잡도
 * 
 * S의 길이는 편의상 S로 하겠음.
 * 
 * - 입력 처리 : O(S)
 * - 문자 출력 : O(1)
 * - 전체 복잡도 : O(S)
 */