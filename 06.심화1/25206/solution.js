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

const gradePoints = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

let totalGradePoints = 0; // (학점 × 과목평점)의 합
let totalCredits = 0; // 학점의 총합

for (const arr of input) {
  const [, score, grade] = arr.split(" ");
  if (grade !== "P") {
    totalGradePoints += gradePoints[grade] * +score;
    totalCredits += +score;
  }
}

// 전공평점 계산
const gpa = totalGradePoints / totalCredits;
console.log(gpa);
