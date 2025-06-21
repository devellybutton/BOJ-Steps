# 시간 초과 해결

- 매번 console.log()를 호출하는 대신, 결과를 배열에 저장하고 마지막에 한 번에 출력하기
  ![Image](https://github.com/user-attachments/assets/f27b7fa7-da08-42f1-96f2-c99268a76aef)

### 수정 전

```
for (let i = 1; i <= N; i++) {
  const numbers = input[i].split(" ").map(Number);
  if (numbers[0] === 1) stack.push(numbers[1]);
  else if (numbers[0] === 2) console.log(stack.pop());
  else if (numbers[0] === 3) console.log(stack.size());
  else if (numbers[0] === 4) console.log(stack.isEmpty());
  else console.log(stack.top());
}
```

### 수정 후

```
const result = [];

for (let i = 1; i <= N; i++) {
  const numbers = input[i].split(" ").map(Number);
  if (numbers[0] === 1) stack.push(numbers[1]);
  else if (numbers[0] === 2) result.push(stack.pop());
  else if (numbers[0] === 3) result.push(stack.size());
  else if (numbers[0] === 4) result.push(stack.isEmpty());
  else result.push(stack.top());
}
```

### 시간 복잡도: O(N)

- N개의 명령을 처리하는 반복문: O(N)
- 각 명령을 처리하는 스택 연산: O(1)
- 결과 출력 (join 연산): O(N)
