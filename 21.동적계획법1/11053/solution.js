const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';
const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const input = fs.readFileSync(inputPath).toString().trim().split('\n');

const N = Number(input[0]);

const arr = input[1].split(' ').map(Number);

const dp = Array(N).fill(1);

// dp[i]는 arr[i]를 마지막 원소로 갖는 부분 수열의 길이
// 시작은 1부터.
// dp[i]는 

// i는 arr 순서대로 1개씩
// j는 i 앞에 있는 원소들만

// dp[j]는 A[j]까지 오름차순 수열의 길이
// dp[j] + 1 : j에서 끝나는 오름차순 수열 뒤에 현재 원소 A[i]를 하나 더 붙였다

for (let i = 0; i < N; i++) {
    for (let j = 0; j< i; j++) {
        if (arr[j] < arr[i]) {
            dp[i] = Math.max(dp[i], dp[j] + 1)
        }
    }
}

console.log(Math.max(...dp))