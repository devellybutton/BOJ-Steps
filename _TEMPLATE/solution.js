const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";
const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(inputPath).toString().trim().split("\n");

const N = parseInt(input);

const arr = input[1].split(" ").map(Number);

// 수열 A의 마지막 수(인덱스 N - 1)는 무조건 참 -> 확인할 필요가 없음.

// 증가 -> 감소

let result = "NO";
let i = 0; // 증가 혹은 감소하면 늘어나는 지표
// 만약 i 가 N - 1이 되었을 때까지 모든 조건 만족 => Yes
// i = 3까지만 검증하고, i = 3이 true라서 i = 4가 되면 종료

// 올라가기
while (i + 1 < N && arr[i] < arr[i + 1]) {
  i++;
}

// 안 올라갔으면 산이 아님
if (i === 0) result = "NO";

// 내려가기
while (i + 1 < N && arr[i] > arr[i + 1]) {
  i++;
}

if (i === N - 1) result = "YES";

console.log(result);
