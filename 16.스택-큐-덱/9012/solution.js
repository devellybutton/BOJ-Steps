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

const N = Number(input[0]);

const result = [];

for (let i = 1; i <= N; i++) {
  const stack = [];
  const patternList = input[i].split("");
  let isValid = true;

  for (pattern of patternList) {
    if (pattern === "(") stack.push(pattern);
    else {
      // ) )
      if (stack.length === 0) {
        isValid = false;
        break;
      }
      stack.pop();
    }
  }

  if (stack.length === 0 && isValid) result.push("YES");
  else result.push("NO");
}

console.log(result.join("\n"));
