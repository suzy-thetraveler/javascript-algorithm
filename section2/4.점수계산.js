function solution(int, numbers) {
  let answer = 0;
  let tmp = 0;
  let sum = 0;
  for (let i of numbers) {
    if (i === 1) {
      tmp++;
      sum += tmp;
    } else {
      tmp = 0;
    }
  }
  answer = sum;

  return answer;
}

console.log(solution(8, [1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
