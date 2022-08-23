function solution(int, numbers) {
  let answer = [];
  answer.push(numbers[0]);

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > numbers[i - 1]) answer.push(numbers[i]);
    else continue;
  }

  return answer;
}

console.log(solution(5, [7, 3, 9, 5, 6, 12]));
