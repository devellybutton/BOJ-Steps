# 2738번

1. 배열 나누기 최적화
```
const arr1 = arr.slice(1, N + 1);
const arr2 = arr.slice(N + 1, 2 * N + 1);
```

2. 바로 출력하는 방법
- 행렬을 덧셈한 후에 row.push()를 사용하여 배열을 만들어 join()출력 대신, map()을 사용하여 바로 출력할 수 있음.
- 코드의 가독성이 높아짐.
```
for (let i = 0; i < N; i++) {
    console.log(arr1[i].map((value, idx) => value + arr2[i][idx]).join(' '));
}
```