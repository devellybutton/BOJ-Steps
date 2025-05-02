const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";
const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(inputPath).toString().replace(/\r/g, "").trim();

// a-z에 대한 첫 등장 위치 저장
// 기본값 -1로 지정
const positions = Array(26).fill(-1);

for (let i = 0; i < input.length; i++) {
  const charCode = input.charCodeAt(i) - 97;

  // 만약 첫 등장이라면 (이전에 등장 X)
  // 알파벳 위치에 인덱스 넣기
  if (positions[charCode] === -1) {
    positions[charCode] = input.indexOf(input[i]);
  } 
}

console.log(positions.join(" "));
