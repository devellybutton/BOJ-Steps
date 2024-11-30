// 1152번. 단어의 개수

const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

const arr = fs.readFileSync(inputPath).toString()
            .replace(/\r/g, '') // 윈도우에서 줄바꿈처리 (\r 제거)
            .trim() // 전체 문장의 양옆 공백 제거
            .split(/\s+/) // 여러 공백을 하나로 처리
            .filter(letter => /^[A-Za-z]+$/.test(letter)) // 배열에서 알파벳만 있는 원소만 필터링

console.log(arr.length);