const fs = require("fs");
const os = require("os");

const isLinux = os.platform() === "linux";
const inputPath = isLinux ? "/dev/stdin" : "./input.txt";

const input = fs.readFileSync(inputPath).toString().trim().split("\n");
const N = parseInt(input[0]);
const arr = input.slice(1).map((word) => word.trim());

const indices = new Set(); // 중복 제거
const arr0 = arr[0].split("");

for (let i = 0; i < N - 1; i++) {
  const arr1 = arr[i].split("");
  const arr2 = arr[i + 1].split("");
  const maxLength = Math.max(arr.length, arr2.length);

  for (let j = 0; j < maxLength; j++) {
    const char1 = arr1[j] || "";
    const char2 = arr2[j] || "";

    if (char1 !== char2) indices.add(j);
  }
}

// arr0에서 indices에 있는 인덱스만 ?표로 교체
const result = arr0.slice();
arr0.map((_, idx) => {
  if (indices.has(idx)) result[idx] = "?";
});

console.log(result.join(""));
