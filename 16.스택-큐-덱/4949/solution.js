const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";

const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs
  .readFileSync(inputPath)
  .toString()
  .replace(/\r/g, "")
  .trim()
  .split("\n");

for (let k = 0; k < input.length; k++) {
  // 맨 마지막 온점 하나 있는 경우 -> 끝
  if (input[k] === ".") break;

  // 문자열 배열과 스택 선언
  const charList = input[k].split("");
  const stack = [];
  let isBalanced = true;

  for (let i = 0; i < charList.length; i++) {
    // 여는 괄호 -> 스택에 집어 넣는다
    if (charList[i] === "(" || charList[i] === "[") {
      stack.push(charList[i]);
      // 닫는 괄호
    } else if (charList[i] === ")" || charList[i] === "]") {
      // 만약 스택이 비어 있는 상태에서 닫는 괄호가 나오면 중단 후 'no' 출력
      if (stack.length === 0) {
        isBalanced = false;
        break;
      }
      // 괄호 짝이 맞지 않은 경우
      if (
        (charList[i] === ")" && stack[stack.length - 1] !== "(") ||
        (charList[i] === "]" && stack[stack.length - 1] !== "[")
      ) {
        isBalanced = false;
        false;
      }

      // 짝이 맞으면 스택에서 제거
      stack.pop();
    }
  }

  // 스택이 비어 있고, balanced 상태이면 yes, 아니면 no
  result = stack.length === 0 && isBalanced ? "yes" : "no";
  console.log(result);
}
