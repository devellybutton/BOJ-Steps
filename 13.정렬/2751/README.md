# 해답

- `solution.js` => 내장 정렬 `O(n log n)`
- `solution2.js` => 계수 정렬 `O(n + k)`

# 출력방식 차이

## join으로 문자열 변환 후 console

```console.log(sortedArr.join("\n"));```

- 한 번의 console.log 호출로 전체 결과를 출력
- 내부적으로 하나의 문자열을 만들어서 한 번에 출력

## forEach 방식 => 시간초과

`sortedArr.forEach(num => console.log(num));`

- 배열의 각 원소마다 console.log를 개별적으로 호출
- N개의 원소가 있으면 N번의 출력 함수 호출
