function solution(int, numbers) {
  let answer = [];
  let tmp = 0;

  for (let i = 0; i < int; i++) {
    for (let j = 0; j < int; j++) {
      if (numbers[i] < numbers[j]) tmp++;
      else continue;
    }
    answer.push(tmp + 1);
    tmp = 0;
  }

  return answer;
}

console.log(solution(5, [87, 92, 92, 100, 76]));
