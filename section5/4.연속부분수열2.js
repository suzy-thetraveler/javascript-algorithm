function solution(num, arr) {
  let answer = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = arr[i];
    if (sum <= 5) answer++;
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      if (sum <= 5) answer++;
      if (sum > 5) break;
    }
  }

  return answer;
}
console.log(solution([5, 5], [1, 3, 1, 2, 3]));
