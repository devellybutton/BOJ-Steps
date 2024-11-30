### Solution 1
- Map 1개 사용 (이름-번호 맵핑, 함수 2개)
- 시간 복잡도
    - 도감 세팅: O(N)
    - 퀴즈 처리: O(M)
    - 번호로 이름 찾기: O(N)
    - 이름으로 번호 찾기: O(1)
    - 전체: O(N + M * N)

### Solution 2
- Map 2개 사용 (이름-번호, 번호-이름 맵핑)
- 시간 복잡도
    - 도감 세팅: O(N) (Map 2개 생성)
    - 퀴즈 처리: O(M)
    - 번호로 이름 찾기: O(1)
    - 이름으로 번호 찾기: O(1)
    - 전체: O(N + M)

![image](https://github.com/user-attachments/assets/154b0852-9488-4b5f-8a22-84f93076a234)
- solution.js 시간초과
- solution2.js 통과