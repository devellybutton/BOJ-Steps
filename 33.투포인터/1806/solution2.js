// 슬라이딩 윈도우 적용

const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const input = fs.readFileSync(inputPath).toString().replace(/\r/g, '').trim().split('\n');

const [N, S] = input[0].split(' ').map(Number);

const arr = input[1].split(' ').map(Number);

let minLength = Infinity; // 최소 길이
let left = 0; // 왼쪽 포인터
let sum = 0; // 구간합

// right 값을 sum에 더하고
// 만약 right까지 다 더한 것이 S이상이면
// 가장 왼쪽에 있는 arr[left]만큼 빼주면서 구간합을 변경시킴
// left 포인터를 이동하면서 범위를 좁힌다
for (let right = 0; right < N; right++) {
  sum += arr[right];
  
  while (sum >= S) {
    // 해당 구간의 원소의 개수와 minLength 중 최솟값 비교
    minLength = Math.min(minLength, right - left + 1);
    // left 인덱스에 해당하는 원소 (해당 구간의 맨 앞 원소)를 뺀다
    sum -= arr[left];
    // 구간을 좁혀야 하니 left 포인터 이동
    left++;
  }
}

console.log(minLength === Infinity ? 0 : minLength);