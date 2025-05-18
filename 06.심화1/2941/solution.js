const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";

const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(inputPath).toString().replace(/\r/g, "").trim();

let count = 0;

for (let i = 0; i <= input.length; i++) {
  // 글자 3개인 것 : dz= => 3개 건너뛰기
  if (
    i + 2 < input.length &&
    input[i] === "d" &&
    input[i + 1] === "z" &&
    input[i + 2] === "="
  ) {
    count++;
    i += 2; // 주의) 3 증가해야되는데, 기본적으로 i가 1씩 증가
  } else if (i + 1 < input.length) {
    // 글자 2개인 것들 => 2개 건너뛰기
    if (
      (input[i] === "c" && (input[i + 1] === "=" || input[i + 1] === "-")) ||
      (input[i] === "d" && input[i + 1] === "-") ||
      (input[i] === "l" && input[i + 1] === "j") ||
      (input[i] === "n" && input[i + 1] === "j") ||
      (input[i] === "s" && input[i + 1] === "=") ||
      (input[i] === "z" && input[i + 1] === "=")
    ) {
      count++;
      i += 1;
    } else {
      // 크로아티아 알파벳 아닌 문자들
      count++;
    }
  } else if (i === input.length - 1) {
    // 마지막 글자
    count++;
  }
}

console.log(count);
