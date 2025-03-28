const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";

const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(inputPath)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n")
  .map(Number);

function cantor(str, start, end) {
  if (end - start <= 1) return str; // 길이가 1이하면 str배열을 반환환

  const len = end - start;  // 배열의 길이
  const third = Math.floor(len / 3);  // 길이의 3등분

  // 가운데 3분의 1 ~ 3분의 2 지점만 공백으로 변경하기
  for (let i = start + third; i < start + 2 * third; i++) {
    str[i] = ' ';
  }

  // 재귀 호출하여 나머지 영역 정리
  cantor(str, start, start + third);
  cantor(str, start + 2 * third, end);

  return str;
}

// 문자열은 수정이 불가능하므로 배열로 변경한다
function solution() {
  for (const N of input) {
    if (N >= 0 && N <= 12) {
      let str = Array.from({ length: 3 ** N }).fill('-');
      console.log(cantor(str, 0, str.length).join(''));
    }
  }
}

solution();
