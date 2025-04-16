const fs = require("fs");
const os = require("os");

// 파일 입력 처리
const inputPath = os.platform() === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(inputPath).toString().trim().split("\n");

const N = parseInt(input[0]);
const arr = input[1].split(" ").map(Number); // 줄 서있는 곳

const stack = []; // 대기공간
let result = ""; // Nice or Sad
let target = 1; // 찾는 번호 (1, 2, 3 순서대로 증가)

// 줄 서있는 곳 학생들을 순서대로 처리
for (let i = 0; i < N; i++) {
  // 만약 줄 서있는 학생의 번호가 현재 찾는 번호이면
  // 찾는 번호 증가 (이미 찾았으니까)
  if (arr[i] === target) {
    target++;
  } else {
    // 아니면 스택에 넣기
    stack.push(arr[i]);
  }

  // 이후 스택에 맨 위에 있는 학생 번호 꺼냄
  // 스택이 안 비어 있고, 찾는 번호 일 경우 스택에서 꺼냄(pop)
  // 이 과정 반복
  // 중요한 건 : while문이 매차례에 무조건 실행되어야 함
  while (stack.length !== 0 && stack[stack.length - 1] === target) {
    stack.pop();
    target++;
  }
}

// 스택이 다 비워지면 Nice 아니면 sad
result = stack.length === 0 ? "Nice" : "Sad";

console.log(result);