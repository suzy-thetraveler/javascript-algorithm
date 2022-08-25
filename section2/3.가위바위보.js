function solution(int, A, B) {
  let answer = [];

  for (let i = 0; i < int; i++) {
    if (A[i] === 3 && B[i] === 1) {
      answer.push('B');
      continue;
    } else if (A[i] === 1 && B[i] === 3) {
      answer.push('A');
      continue;
    } else if (A[i] > B[i]) {
      answer.push('A');
      continue;
    } else if (A[i] < B[i]) {
      answer.push('B');
      continue;
    } else {
      answer.push('D');
      continue;
    }
  }
  /**
   * 이렇게 해도 무방하지만
   * A가 이기는 상황만을 조건문으로 작성하고
   * 나머지는 다 B가 이기는 것으로 작성해도 좋음.
   * -> 이게 더 깔끔한 코드같음
   */

  return answer;
}

console.log(solution(5, [2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));
