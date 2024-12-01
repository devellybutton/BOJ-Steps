# 출력값 숫자일 때 숫자 vs 문자

- 출력값에 숫자가 있는 경우, 타입이 숫자든 문자든 상관없음.

숫자로 출력하는 경우
```
console.log(answer.length);
console.log(answer.join('\n'))
```
=> 정답 처리

문자로 출력하는 경우
```
console.log(`${answer.length}\n${answer.join('\n')}`);
```
=> 정답 처리

![image](https://github.com/user-attachments/assets/85c4445e-8ede-4239-84f0-0d11d8a7e998)
- 위 : 문자로 출력
- 아래 : 숫자로 출력

----

# 리팩토링

## 1. 두 집합의 교집합을 구하고 사전순으로 정렬하기

- 변수 선언과 할당, for 반복문에서 has()로 선별, 정렬
```
// 듣보잡 명단
const answer = [];

// 둘 다 있는 경우 출력
for (person of neverHeardOf) {
  if (neverSeenBefore.has(person)) {
    answer.push(person);
  }
}

// 듣보잡 명단을 사전순 정렬
answer.sort();
```

- 구조분해할당 + 배열 메소드 filter + 정렬 메소드 sort
```
// 두 집합의 교집합을 찾아 사전순으로 정렬
const answer = [...neverHeardOf].filter(person => neverSeenBefore.has(person)).sort();
```

## 2. slice() vs splice()

- <b>slice()</b>
  - 원본 배열을 <b>변경하지 않고</b>, 지정된 범위에서 요소를 제거하거나 교체하거나 새로운 요소를 추가
```
const neverHeardOf = new Set(input.slice(1, N + 1));
const neverSeenBefore = new Set(input.slice(N + 1, N + 1 + M));
```
- <b>`input.slice(1, N + 1)`</b> : input 배열의 1번 인덱스부터 N번 인덱스까지의 요소를 잘라내어 새로 반환 (N개)
- <b>`input.slice(N + 1, N + 1 + M)`</b> : N + 1번 인엑스부터 N + M 번 인덱스까지의 요소를 잘라내어 새로 반환 (M개)

- <b>splice()</b>
  -  원본 배열을 <b>변경</b>하며, 지정된 범위에서 요소를 제거하거나 교체하거나 새로운 요소를 추가
```
const neverHeardOf = new Set(input.splice(1, N)); 
const neverSeenBefore = new Set(input.splice(1, M)); 
```
- <b>`input.splice(1, N)`</b> : input 배열에서 1번 인덱스부터 N개의 요소를 제거하고, 새로운 배열 반환
- <b>`input.splice(1, M)`</b> : input 배열에서 1번 인덱스부터 M개의 요소를 제거하고, 새로운 배열 반환 <i>(이전 코드의 영향으로 현재 0번 인덱스 이후 N+1 인덱스가 1번 인덱스가 되는 상황임.)</i>