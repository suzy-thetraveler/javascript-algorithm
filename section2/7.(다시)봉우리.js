function solution(int, numbers) {
  let answer = 0;
  for (let i = 0; i < int; i++) {
    for (let j = 0; j < int; j++) {
      let dx = [-1, 0, 1, 0];
      let dy = [0, 1, 0, -1];
      let flag = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < int &&
          ny < int &&
          numbers[nx][ny] > numbers[i][j]
        ) {
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }
  /**
   * 풀지 못한 문제...
   * 좌표를 찍어서 확인한다.
   * 모든 경우를 확인하는 것이 아니라
   * 안되는 케이스만 혹은 되는 케이스만 확인하고 계산한다.
   * 이번의 문제의 경우에는 하나라도 크면 더이상 볼 필요가 없는 것이니
   * 큰게 나오면 넘어가는 방식으로!
   */

  return answer;
}

console.log(
  solution(5, [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);
