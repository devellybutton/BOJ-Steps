# 자바스크립트 말고 파이썬으로 풀면 시간초과 안 되고 잘 됨.

![image](https://github.com/user-attachments/assets/6319b5e2-9205-4b55-83af-8f7c1327dc01)


# 동작 원리

```
start -> end (3개 원판을 옮겨야 함)
1. start -> middle (2개 원판을 옮겨야 함)
    1. start -> end (1개 원판을 옮겨야 함)  <-- 가장 작은 문제 (1개 원판)
    2. start -> middle (2번 원판을 옮김)
    3. end -> middle (1개 원판을 옮겨야 함)
2. start -> end (가장 큰 원판을 옮김)
3. middle -> end (2개 원판을 옮겨야 함)
    1. middle -> start (1개 원판을 옮김)
    2. middle -> end (2번 원판을 옮김)
```
- N = 3일 때 이런식으로 컴퓨터에서 재귀함수를 호출해 줌.
- solution.js에서 배열을 추가했는데 굳이 추가할 필요가 없음.
- 전체 이동 횟수는 2^n - 1로 같고, 중간 과정만 출력만 해주면 됨.