const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";

const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(inputPath)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split(" ");

// N: 사용할 수 있는 숫자 범위
// M: 선택해야하는 숫자
const [N, M] = input.map(Number);

const visited = new Array(N + 1).fill(false);
const result = [];
const output = [];

function backTrack(depth) {
  if (depth === M) {
    result.push(output.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    // 이미 방문했으면 건너뛰기
    if (visited[i]) continue;

    visited[i] = true;
    output.push(i);

    backTrack(depth + 1);

    visited[i] = false;
    output.pop();
  }
}

backTrack(0);

console.log(result.join("\n"));
