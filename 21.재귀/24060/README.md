맞는 것 같은데 계속 틀렸다고 하여, 인터넷에서 찾아보니 다른 논리는 같은데 인덱스 설정할 때 메서드가 달랐음.

<br>
- 틀린 풀이
```
  let mid = Math.floor(arr.length / 2); // arr의 가운데 인덱스
```

- 맞는 풀이
```
  let mid = Math.ceil(arr.length / 2); // arr의 가운데 인덱스
```