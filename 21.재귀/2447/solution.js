// 2447번. 별 찍기

const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const N = Number(fs.readFileSync(inputPath).toString().replace(/\r/g, '').trim());

// 문자열이 아닌 2차원 배열로 접근
// 먼저 2차원 배열로 기본 N * N 배열의 모양을 찍어내는 함수 만들기
function printStars(N) {
  // 종료 조건
  if (N === 1) return '*';

  // N을 3부분을 쪼개기 (3 * 3으로 나눈다)
  const size = N / 3;

  // 모두 빈칸만 있는 N x N 배열 만들기
  const arr = Array.from({ length: N }, () => Array(N).fill(' '))

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      // 가장 가운데 부분은 공백
      if (i === 1 && j === 1) continue;

      // 현재 구간에 대해서 패턴 채우기
      fillPattern(arr, i * size, j * size, size);
    }
  }

  // 각 행을 map 메서드에서 join('') (***)
  // 전체 배열의 원소 [***], [* *], [***]을 엔터(\n)로 join('\n')
  return arr.map(row => row.join('')).join('\n');
}

// 이차원 배열에서 별 채우는 함수
function fillPattern(arr, x, y, size) {
  // 종료조건
  if (size === 1) {
    arr[x][y] = '*';
    return;
  }

  // 크기를 3으로 나누어 작은 패턴 채우기
  const newSize = size / 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i === 1 && j === 1) continue;

      fillPattern(arr, x + i * newSize, y + j * newSize, newSize);
    }
  }
} 

console.log(printStars(N));