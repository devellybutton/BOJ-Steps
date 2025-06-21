# 이걸로 실행하면 잘 통과됨.

import sys

# 하노이탑 이동하는 함수
def hanoiTower(n, start, end, middle):
    if n == 1:
        # 가장 작은 원판은 바로 이동
        # 종료조건
        print(start, end)
        return

    # (n-1)개 원판은 start => middle로 바로 이동
    # 목적지가 middle이므로 end가 들어가는 자리에 middle을 써줌
    hanoiTower(n-1, start, middle, end)

    # 가장 큰 원판은 start => end로 이동
    print(start, end)

    # (n-1)개 원판은 middle => end로 바로 이동
    hanoiTower(n - 1, middle, end, start)

# 입출력 받아서 문제 푸는 함수
def solution():
    N = int(sys.stdin.read().strip())

    # 전체 이동 횟수 출력
    print((2 ** N) - 1)

    # 하노이탑 함수 호출
    hanoiTower(N, 1, 3, 2)

solution()