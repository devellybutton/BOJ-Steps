# 2차원 배열 생성시 중괄호 주의

올바르게 작동 O
```
const arr = Array.from({ length: N }, () => Array(N).fill(' '))
```
- 각 행을 공백으로 채운 크기 N의 배열 생성됨.

올바르게 작동 X
```
const arr = Array.from({ length: N }, () => { Array(N).fill(' ') })
```
- 화살표 함수에서 반환하는 값이 없어서 undefined를 반환

올바르게 작동 O
```
const arr = Array.from({ length: N }, () => { return Array(N).fill(' ') })
```
- 화살표 함수에서 중괄호 { } 를 사용하면 <b>명시적인 return 문</b>이 필요

----

# 2447번 설명

![image](https://github.com/user-attachments/assets/7e95053f-a6c7-480c-9f23-79294844165a)

## 1. 기본 접근 방식
- 이차원 배열을 사용해 패턴 생성
- 초기에는 모든 칸을 공백으로 채움
- 재귀를 통해 패턴 채워나감

## 2. 재귀의 규칙
- 입력 크기 N을 3으로 계속 나눔
- 3x3 영역으로 분할 (Different input)
- 크기가 1일 때는 별 1개 찍고 마무기 (Base Case)
- 가운데 영역은 공백 (좌표 1, 1로 설정)

## 3. printStars(N) 함수
- N x N 크기의 2차원 배열 생성
- 배열을 N/3 x N/3 (구역)로 분할
- 각 구역의 <b>시작점</b>에만 별을 찍어서 구역을 나눔.
- 각 구역에 대해 fillPattern을 호출
- Base Case:
    - size가 1이면 해당 위치에 별 찍고 재귀 종료
- Different Input:
    - size가 3으로 나뉨
    - `x * size` : 수직 방향 시작 좌표
    - `y * size` : 수평 방향 시작 좌표

## 4. fillPattern(arr, x, y, size)
- 구역 안에서 실제 별을 찍어내는 함수
- Base Case:
    - size가 1이면 해당 위치(2차원 배열의 좌표)에 별 찍고 재귀 종료
- Different Input:
    - size를 3으로 나눔 (newSize)
    - `x + i * newSize` : 수직 방향 시작 좌표
    - `y + j * newSize` : 수평 방향 시작 좌표