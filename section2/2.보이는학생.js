function solution(int, numbers) {
  let answer = 1;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
      answer++;
    } else continue;
  }

  return answer;
}

console.log(solution(8, [130, 135, 148, 140, 145, 150, 150, 153]));
