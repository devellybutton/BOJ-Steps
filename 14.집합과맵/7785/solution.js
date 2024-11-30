// 7785번. 회사에 있는 사람

const fs = require('fs');
const os = require('os');

const isLinux = os.platform() === 'linux';

const inputPath = isLinux ? '/dev/stdin' : './input.txt'; 

// 출입 기록의 수 n을 제외하고 새로운 배열 생성
const memberList = fs.readFileSync(inputPath).toString().replace(/\r/g, '').trim().split('\n').slice(1).map(el => el.split(' '));

// 동명이인이 없다고 하였으니 자료구조 Set을 이용함.
const membersInCompany = new Set();

// 만약 출입상태가 "enter"이면 Set에 이름 추가
// 출입상태가 "delete"이면 Set에서 이름 제거
for (worker of memberList) {
  const [name, status] = worker;
  if (status === "enter") membersInCompany.add(name);
  else if (status === "leave") membersInCompany.delete(name);
};

// Set의 모든 원소를 문자 역순으로 정렬
// Set을 순회하여 console로 출력
[...membersInCompany]
  .sort()
  .reverse()
  .forEach(el => {console.log(el)});

/**
 * 시간 복잡도
 * - n은 
- 입력 처리: O(n)
- Set에 추가/삭제: O(n)
- 정렬 및 출력: O(m log m)
 */