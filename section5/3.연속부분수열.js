function solution(num, arr) {
  let answer = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      sum += arr[j];
      if (sum === 6) {
        answer++;
        break;
      }
      if (sum > 6) {
        break;
      }
    }
  }

  return answer;
}
console.log(solution([8, 6], [1, 2, 1, 3, 1, 1, 1, 2]));
