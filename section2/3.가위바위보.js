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

  return answer;
}

console.log(solution(5, [2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));
