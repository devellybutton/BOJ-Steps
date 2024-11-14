const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const input = fs.readFileSync(inputPath).toString().trim();

const N = Number(input);

function MenOfPassion(n) {
  let arr = Array.from({ length: n }, (_, index) => index + 1);
  let sum = 0;
  let count = 0;

  // i는 0부터 n-2까지 => (n - 1)번 반복
  // j는 i + 1부터 n - 1까지 반복 => (n - i - 1)번 반복
  // j는 i에 따라 달라짐
  // (n - 1) + (n - 2) + ... + 2 + 1
  // 1부터 (n - 1)까지의 합 => 즉, (n - 1) * n / 2
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      sum += (arr[i] * arr[j]);
      count += 1;
    }
  }

  return count;
}

// console.log(MenOfPassion(N))

// 즉, (n - 1) * n / 2
const count = (N - 1) * N / 2;
console.log(count)

// 최고차항의 차수는 2
console.log(2)